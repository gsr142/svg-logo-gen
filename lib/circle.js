const Shape = require('./shape.js')

class Circle extends Shape {
    constructor(name, shapeColor, textColor) {
        super(name, shapeColor, textColor);
    };
    render() {
        return `
        <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='150' cy='100' r='100' fill='${this.shapeColor}'/>
            <text x='150' y='120' font-size='75' text-anchor='middle' fill='${this.textColor}'>
                ${this.name}
            </text>
        </svg>`
    }
};

module.exports = Circle