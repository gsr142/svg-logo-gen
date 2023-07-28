// Use require to import the necessary functions and inputs.
const inquirer = require('inquirer')
const questions = require('./lib/questions.js');
const generateLogo = require('./lib/generateLogo.js');
// Prompts the user with questions, then calls generateLogo() with the argument 'input'.
// input is the user responses to the prompted questions.
inquirer
    .prompt(questions)
    .then((input) => {
        generateLogo(input);
    });
