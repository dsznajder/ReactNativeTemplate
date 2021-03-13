import chalk from 'chalk';
import spawn from 'cross-spawn';
import ejs from 'ejs';
import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs';
import childProcess from 'child_process';

import prompts, { PromptObject } from './helpers/prompt';
import getPackagesToInstall from './packages';
import { Answers, ArgName, Integrations, Modules } from './types';

const COMMON_FILES = path.resolve(__dirname, '../templates/common');
const GRAPHQL_FILES = path.resolve(__dirname, '../templates/graphql');
const FASTLANE_FILES = path.resolve(__dirname, '../templates/fastlane');

const args: Record<ArgName, yargs.Options> = {
  integrations: {
    description:
      'Which integrations/features would you like to have in your app?',
    choices: [
      Integrations.GraphQL,
      Integrations.Unimodules,
      Integrations.Fastlane,
    ],
  },
  modules: {
    description: 'Which packages would you like to have in your app?',
    choices: [
      Modules.Screens,
      Modules.Reanimated,
      Modules.GestureHandler,
      Modules.Config,
      Modules.Navigation,
      Modules.KeyboardManager,
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
        { title: 'Unimodules', value: Integrations.Unimodules },
        // { title: 'GraphQL', value: Integrations.GraphQL },
        // { title: 'Fastlane', value: Integrations.Fastlane },
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
        // { title: 'react-navigation', value: Modules.Navigation },
        // { title: 'react-native-config', value: Modules.Config },
        // { title: 'react-native-keyboard-manager', value: Modules.KeyboardManager },
      ],
    },
  };

  const { integrations, modules } = {
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

  if (!(await fs.pathExists(folder))) {
    console.log(
      chalk.bgCyan.black(
        `Initialising react-native project ${basename}. It may take some time...`,
      ),
    );

    childProcess.execSync(
      `npx react-native init ${basename} --template react-native-template-typescript`,
    );

    console.log(chalk.green('✅ Project initialised'));
  }

  const options = {
    project: {
      name: basename,
      package: basename.toLowerCase(),
    },
    integrations: {
      graphql: integrations.includes(Integrations.GraphQL),
      unimodules: integrations.includes(Integrations.GraphQL),
      fastlane: integrations.includes(Integrations.GraphQL),
    },
    modules: {
      reanimated: modules.includes(Modules.Reanimated),
      screens: modules.includes(Modules.Screens),
      config: modules.includes(Modules.Config),
      gestureHandler: modules.includes(Modules.GestureHandler),
      navigation: modules.includes(Modules.Navigation),
    },
  } as const;

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

  console.log(chalk.blue('Coping common files'));
  await copyDir(COMMON_FILES, folder);
  console.log(chalk.green('✅ Copied common files'));

  // if (options.integrations.graphql) {
  //   console.log(chalk.blue('Coping GraphQL files'));
  //   await copyDir(GRAPHQL_FILES, folder);
  //   console.log(chalk.green('✅ Copied GraphQL files'));
  // }
  // if (options.integrations.fastlane) {
  //   console.log(chalk.blue('Coping Fastlane files'));
  //   await copyDir(FASTLANE_FILES, folder);
  //   console.log(chalk.green('✅ Copied Fastlane files'));
  // }

  /**
   * A bit hackish but for now I did not found anything better :shrug:
   */
  childProcess.execSync(`chmod +x ./${basename}/scripts/*`);
  if (packages.length > 0) {
    console.log(chalk.blue(`Adding dependencies ${packages.join(', ')}`));
    childProcess.execSync(
      `yarn --cwd ${basename} add ${packages.join(' ')} --ignore-scripts`,
    );
    console.log(chalk.green('✅ Dependencies added'));
  }

  if (devPackages.length > 0) {
    console.log(chalk.blue(`Adding dependencies ${devPackages.join(', ')}`));
    childProcess.execSync(
      `yarn --cwd ${basename} add ${devPackages.join(
        ' ',
      )} --dev --ignore-scripts`,
    );
    console.log(chalk.green('✅ Dev dependencies added'));
  }

  console.log(chalk.blue(`Installing dependencies & Pods...`));
  childProcess.execSync(`yarn --cwd ${basename}`);
  console.log(chalk.green('✅ Dependencies & Pods installed'));
}

yargs
  .command('$0 <name>', 'create a react native library', args, create)
  .demandCommand()
  .recommendCommands()
  .strict().argv;
