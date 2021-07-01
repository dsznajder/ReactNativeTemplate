import chalk from 'chalk';
import ejs from 'ejs';
import execa from 'execa';
import fs from 'fs-extra';
import { set } from 'lodash';
import path from 'path';
import yargs from 'yargs';

import prompts, { PromptObject } from './helpers/prompt';
import summaryMessage from './helpers/summaryMessage';
import getPackagesToInstall from './packages';
import { Answers, ArgName, Integrations, Modules, Options } from './types';

const COMMON_FILES = path.resolve(__dirname, '../templates/common');
const GRAPHQL_FILES = path.resolve(__dirname, '../templates/graphql');
const REDUX_FILES = path.resolve(__dirname, '../templates/redux');
// const FASTLANE_FILES = path.resolve(__dirname, '../templates/fastlane');

const NAVIGATION_FILES = path.resolve(__dirname, '../templates/navigation');

const args: Record<ArgName, yargs.Options> = {
  integrations: {
    description:
      'Which integrations/features would you like to have in your app?',
    choices: [
      Integrations.Fastlane,
      Integrations.GraphQL,
      Integrations.Redux,
      Integrations.Unimodules,
    ],
  },
  modules: {
    description: 'Which packages would you like to have in your app?',
    choices: [
      Modules.Config,
      Modules.GestureHandler,
      Modules.KeyboardManager,
      Modules.Navigation,
      Modules.Reanimated,
      Modules.Screens,
      Modules.Svg,
      Modules.VectorIcons,
    ],
  },
};

async function create(argv: yargs.Arguments<any>) {
  const folder = path.join(process.cwd(), argv.name);
  const basename = path.basename(argv.name);

  const questions: Record<
    ArgName,
    Omit<PromptObject<keyof Answers>, 'validate'> & {
      validate?: (value: string) => boolean | string;
    }
  > = {
    integrations: {
      type: 'multiselect',
      name: 'integrations',
      message:
        'Which integrations/features would you like to have in your app?',
      choices: [
        { title: 'Redux', value: Integrations.Redux },
        { title: 'GraphQL', value: Integrations.GraphQL },
        { title: 'Unimodules', value: Integrations.Unimodules },
        // { title: 'Fastlane', value: Integrations.Fastlane },
        // { title: 'Sentry', value: Integrations.Sentry },
      ],
    },
    modules: {
      type: 'multiselect',
      name: 'modules',
      message: 'Which packages would you like to add to your app?',
      choices: [
        { title: 'react-native-screens', value: Modules.Screens },
        { title: 'react-native-reanimated', value: Modules.Reanimated },
        {
          title: 'react-native-gesture-handler',
          value: Modules.GestureHandler,
        },
        { title: 'react-native-svg', value: Modules.Svg },
        { title: 'react-native-vector-icons', value: Modules.VectorIcons },
        { title: 'react-navigation', value: Modules.Navigation },
        // { title: 'react-native-config', value: Modules.Config },
        // { title: 'react-native-keyboard-manager', value: Modules.KeyboardManager },
      ],
    },
  };

  const extraOptionsQuestions = {
    modules: {
      [Modules.Navigation]: [
        {
          type: 'select',
          name: 'variant',
          message:
            'Which starting navigation would you like to add to your app?',
          choices: [
            {
              title: 'Simple Stack navigation',
              value: 'stack',
            },
            {
              title: 'Bottom Bar navigation',
              value: 'bottomBar',
            },
          ],
        },
      ],
    },
  };

  const { integrations = [], modules = [] } = {
    ...argv,
    ...(await prompts(
      Object.entries(questions)
        .filter(
          ([k, v]) =>
            !(argv[k] && v.validate
              ? v.validate(argv[k]) === true
              : Boolean(argv[k])),
        )
        .map(([, v]) => v),
    )),
  } as Answers;

  const hasModuleSelected = (moduleName: Integrations | Modules) =>
    [...integrations, ...modules].includes(moduleName);

  const flatQuestions = Object.entries(extraOptionsQuestions).flatMap(
    ([answerKey, questionsPerAnswer]) =>
      Object.entries(questionsPerAnswer)
        .filter(([moduleName]) =>
          hasModuleSelected(moduleName as Integrations | Modules),
        )
        .flatMap(([moduleName, moduleQuestions]) =>
          moduleQuestions.flatMap(({ name, ...moduleQuestion }) => ({
            ...moduleQuestion,
            name: `${answerKey}.${moduleName}.${name}`,
          })),
        ),
  ) as Array<PromptObject>;

  const extraOptions = Object.entries(await prompts(flatQuestions)).reduce(
    (acc, [k, v]) => set(acc, k, v),
    {},
  );

  if (!(await fs.pathExists(folder))) {
    console.log(
      chalk.bgCyan.black(
        `Initialising react-native project ${basename}. It may take some time...`,
      ),
    );

    execa.sync('npx', [
      'react-native',
      'init',
      basename,
      '--template',
      'react-native-template-typescript',
    ]);

    console.log(chalk.green('✅ Project initialised'));
  }

  /**
   * Creating options for ejs parser i.e:
   * { integrations: { redux: true }, modules: { screens: true } }
   * TODO: Maybe it's overcomplicated. Get back to it after some time :)
   */
  const options = Object.entries({
    integrations,
    modules,
  }).reduce(
    (options, [mainKey, values]: [string, Array<Integrations | Modules>]) => {
      options[mainKey as 'integrations' | 'modules'] = values.reduce(
        (acc, key) => {
          acc[key] = true;
          return acc;
        },
        {} as { [key in Integrations | Modules]: boolean },
      );

      return options;
    },
    {
      project: {
        name: basename,
        package: basename.toLowerCase(),
      },
      extraOptions,
    } as Options,
  );

  if (options.modules.navigation) {
    options.modules.gestureHandler = true;
  }

  const copyDir = async (source: string, dest: string) => {
    await fs.mkdirp(dest);

    const files = await fs.readdir(source);

    for (const f of files) {
      const target = path.join(
        dest,
        ejs.render(f.replace(/^\$/, '').replace('.ejs', ''), options, {
          openDelimiter: '{',
          closeDelimiter: '}',
        }),
      );

      const file = path.join(source, f);
      const stats = await fs.stat(file);

      if (stats.isDirectory()) {
        await copyDir(file, target);
      } else {
        const content = await fs.readFile(file, 'utf8');

        await fs.writeFile(target, ejs.render(content, options));
      }
    }
  };

  const [packages, devPackages] = getPackagesToInstall(options);

  console.log(chalk.blue('Copying common files'));
  await copyDir(COMMON_FILES, folder);
  console.log(chalk.green('✅ Copied common files'));

  if (options.integrations.graphql) {
    console.log(chalk.blue('Copying GraphQL files'));
    await copyDir(GRAPHQL_FILES, folder);
    console.log(chalk.green('✅ Copied GraphQL files'));
  }

  if (options.integrations.redux) {
    console.log(chalk.blue('Copying Redux files'));
    await copyDir(REDUX_FILES, folder);
    console.log(chalk.green('✅ Copied Redux files'));
  }
  // if (options.integrations.fastlane) {
  //   console.log(chalk.blue('Copying Fastlane files'));
  //   await copyDir(FASTLANE_FILES, folder);
  //   console.log(chalk.green('✅ Copied Fastlane files'));
  // }

  if (options.modules.navigation) {
    console.log(chalk.blue('Copying react-navigation files'));
    await copyDir(NAVIGATION_FILES, folder);
    console.log(chalk.green('✅ Copied react-navigation files'));
  }

  /**
   * A bit hackish but for now I did not found anything better :shrug:
   */
  execa.sync('chmod', ['+x', `${folder}/scripts/postinstall.sh`]);
  if (packages.length > 0) {
    console.log(chalk.blue(`Adding dependencies ${packages.join(', ')}`));
    execa.sync(
      'yarn',
      ['--cwd', basename, 'add', '--ignore-scripts'].concat(packages),
    );
    console.log(chalk.green('✅ Dependencies added'));
  }

  if (devPackages.length > 0) {
    console.log(
      chalk.blue(`Adding dev dependencies ${devPackages.join(', ')}`),
    );
    execa.sync(
      'yarn',
      ['--cwd', basename, 'add', '--dev', '--ignore-scripts'].concat(
        devPackages,
      ),
    );
    console.log(chalk.green('✅ Dev dependencies added'));
  }

  console.log(chalk.blue(`Installing dependencies & Pods...`));
  execa.sync('yarn', ['--cwd', basename, 'install']);
  console.log(chalk.green('✅ Dependencies & Pods installed'));

  // TODO: Check why eslint does not see packages
  // console.log(chalk.blue(`Linting...`));
  // execa.sync('yarn', ['--cwd', basename, 'lint', '--fix']);
  // console.log(chalk.green('✅ Lint successful'));

  console.log(summaryMessage(basename));
}

yargs
  .command('$0 <name>', 'create a react native library', args, create)
  .demandCommand()
  .recommendCommands()
  .strict().argv;
