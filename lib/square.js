const Shape = require('./shape.js')

class Square extends Shape {
    constructor(name, shapeColor, textColor) {
        super(name, shapeColor, textColor);
    };
    render() {
        return `
        <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            <rect width='200' height='200' fill='${this.shapeColor}'/>
            <text x='100' y='125' font-size='80' text-anchor='middle' fill='${this.textColor}'>
                ${this.name}
            </text>
        </svg>`
    }
};
module.exports = Square