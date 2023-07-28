const Shape = require('./shape.js')

class Triangle extends Shape {
    constructor(name, shapeColor, textColor) {
        super(name, shapeColor, textColor);
    };
    render() {
        return `
        <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            <polygon points='150, 18 244, 182 56, 182' fill='${this.shapeColor}'/>
            <text x='150' y='175' font-size='80' text-anchor='middle' fill='${this.textColor}'>
                ${this.name}
            </text>
        </svg>`
    }
};
module.exports = Triangle;