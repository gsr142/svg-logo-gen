const fs = require('fs');
const shapeSelect = require('./shapeSelect.js');

function generateLogo(input) {
    // calls shape select with user input as the argument
    const logo = shapeSelect(input);
    // Writes a new file titled 'logo.svg' to the examples file. Logs an error if there is an error, otherwise logs a message that the logo has been generated.
    fs.writeFile('./examples/logo.svg', logo, (err) =>
        err ? console.log(err) : console.log('Your logo has been generated.'));
}

module.exports = generateLogo