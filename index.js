const inquirer = require('inquirer')
const questions = require('./lib/questions.js')

inquirer
    .prompt(questions)
    .then((input) => {
        console.log(input);
    });