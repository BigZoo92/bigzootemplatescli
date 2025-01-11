#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const program = new commander_1.Command();
program.version('1.0.0');
program
    .command('create')
    .description('Creates a new project')
    .action(() => {
    console.log(chalk_1.default.cyan('Welcome to the Project Generator!'));
    inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'projectType',
            message: 'What type of project would you like to create?',
            choices: [
                { name: 'Backend Application', value: 'backend' },
                { name: 'Frontend Application', value: 'frontend' },
                { name: 'Full Stack Application', value: 'fullstack' }
            ]
        }
    ]).then(answers => {
        console.log(chalk_1.default.green(`You have chosen to create a ${answers.projectType} project.`));
    });
});
program.parse(process.argv);
