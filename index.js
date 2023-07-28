const inquirer = require('inquirer')
const questions = require('./lib/questions.js');
const generateLogo = require('./lib/generateLogo.js');

inquirer
    .prompt(questions)
    .then((input) => {
        generateLogo(input);
    });
