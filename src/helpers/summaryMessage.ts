import chalk from 'chalk';

const title = '                   Your project is ready!                 ';
const projectNotice = [
  '   You can start your project with predefined commands:   ',
  '     - yarn ios                                           ',
  '     - yarn android                                       ',
];

const summaryMessage = `
${chalk.cyanBright.bold(title)}
${chalk.magenta(projectNotice.join('\n'))}
`;

export default summaryMessage;
