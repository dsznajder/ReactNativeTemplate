import chalk from 'chalk';

const projectNotice = [
  '    You can start your project with predefined commands:',
  '      - yarn ios',
  '      - yarn android',
];

const summaryMessage = (projectName: string) => `
${chalk.cyanBright.bold(`    Your project is ready!`)}
${chalk.magenta(projectNotice.join('\n'))}
`;

export default summaryMessage;
