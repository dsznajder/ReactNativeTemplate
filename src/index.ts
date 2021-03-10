import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import yargs from 'yargs';

import { ArgName } from './types';

const args: Record<ArgName, yargs.Options> = {
  projectName: {},
};

async function create(argv: yargs.Arguments<any>) {
  const folder = path.join();

  if (await fs.pathExists(folder)) {
    console.log(
      `A folder already exists at ${chalk.blue(
        folder,
      )}! Please specify another folder name or delete the existing one.`,
    );

    process.exit(1);
  }

  const basename = path.basename(argv.name);
}

yargs
  .command('$0 <name>', 'create a react native library', args, create)
  .demandCommand()
  .recommendCommands()
  .strict().argv;
