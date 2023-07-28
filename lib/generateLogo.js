const fs = require('fs');
const shapeSelect = require('./shapeSelect.js');

function generateLogo(input) {
    const logo = shapeSelect(input);
    fs.writeFile('./examples/logo.svg', logo, (err) =>
        err ? console.log(err) : console.log('Your logo has been generated.'));
}

module.exports = generateLogo