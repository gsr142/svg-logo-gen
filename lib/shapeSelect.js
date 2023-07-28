const Square = require('./square.js');
const Circle = require('./circle.js');
const Triangle = require('./triange.js');

// Creates a new instance of The user selected shape with the user's selections as arguments, calls render() on selected shape.
function shapeSelect(input) {
    if (input.shape == 'Circle') {
        let selectedShape = new Circle(input.name, input.shapeColor, input.textColor);
        return selectedShape.render();
    } else if (input.shape == 'Square') {
        let selectedShape = new Square(input.name, input.shapeColor, input.textColor);
        return selectedShape.render();
    } else {
        let selectedShape = new Triangle(input.name, input.shapeColor, input.textColor);
        return selectedShape.render();
    }
}

module.exports = shapeSelect;