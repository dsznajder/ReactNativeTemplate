import chalk from 'chalk';
import ejs from 'ejs';
import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs';

import copyDir from './helpers/copyDir';
import prompts, { PromptObject } from './helpers/prompt';
import { Answers, ArgName, Integrations, Modules } from './types';

const COMMON_FILES = path.resolve(__dirname, '../templates/common');

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
    choices: [Modules.Screens, Modules.Reanimated],
  },
};

async function create(argv: yargs.Arguments<any>) {
  const folder = path.join(process.cwd(), argv.name);

  // if (await fs.pathExists(folder)) {
  //   console.log(
  //     `A folder already exists at ${chalk.gray(
  //       folder,
  //     )}! Please specify another folder name or delete the existing one.`,
  //   );

  //   process.exit(1);
  // }

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
        { title: 'GraphQL', value: Integrations.GraphQL },
        { title: 'Unimodules', value: Integrations.Unimodules },
        { title: 'Fastlane', value: Integrations.Fastlane },
      ],
    },
    modules: {
      type: 'multiselect',
      name: 'modules',
      message: 'Which packages would you like to add to your app?',
      choices: [
        { title: 'react-native-screens', value: Modules.Screens },
        { title: 'react-native-reanimated', value: Modules.Reanimated },
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

  const options = {
    project: {
      name: basename,
    },
    integrations: {
      graphql: integrations.includes(Integrations.GraphQL),
      unimodules: integrations.includes(Integrations.GraphQL),
      fastlane: integrations.includes(Integrations.GraphQL),
    },
    modules: {
      reanimated: modules.includes(Modules.Reanimated),
      screens: modules.includes(Modules.Screens),
    },
  };

  const copyDir = async (source: string, dest: string) => {
    await fs.mkdirp(dest);

    const files = await fs.readdir(source);

    for (const f of files) {
      const target = path.join(
        dest,
        ejs.render(f.replace(/^\$/, ''), options, {
          openDelimiter: '{',
          closeDelimiter: '}',
        }),
      );

      const file = path.join(source, f);
      const stats = await fs.stat(file);

      if (stats.isDirectory()) {
        await copyDir(file, target);
      } else {
        await fs.copyFile(file, target);
      }
    }
  };

  await copyDir(COMMON_FILES, folder);
}

yargs
  .command('$0 <name>', 'create a react native library', args, create)
  .demandCommand()
  .recommendCommands()
  .strict().argv;
