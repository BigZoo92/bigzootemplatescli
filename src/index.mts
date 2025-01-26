#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';

const program = new Command();

program.version('1.0.5');

program
  .command('create')
  .description('Creates a new project')
  .action(async () => {
    const chalk = (await import('chalk')).default;
    console.log(chalk.cyan('Welcome to the Project Generator!'));
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'projectType',
          message: 'What type of project would you like to create?',
          choices: [
            { name: 'Backend Application', value: 'backend' },
            { name: 'Frontend Application', value: 'frontend' },
            { name: 'Full Stack Application', value: 'fullstack' },
          ],
        },
      ])
      .then((answers) => {
        console.log(
          chalk.green(
            `You have chosen to create a ${answers.projectType} project.`
          )
        );
      });
  });

program.parse(process.argv);
