// class Shape
    //class circle extends class shape
    //class triangle extends class shape
    //class square extends class shape

class Shape {
    constructor (name, shapeColor, textColor) {
        this.name = name;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
};

class Circle extends Shape {
    constructor (name, shapeColor, textColor) {
        super(name, shapeColor, textColor);
    };
    render () {
        return `
        <svg width = '300' height='200' xmlns="http://www.w3.org/2000/svg>
            <circle cx='150' cy = '100' r = '100' fill = "${this.shapeColor}"/>
            <text x='150' y='120' font-size='75' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
        </svg>
        `
    }
}