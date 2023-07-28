const Circle = require("./circle.js");

//Example test
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
describe('Circle', () => {
    it('should return logo with the user initials, and selection of color, and text color', () =>{
        const circle = new Circle('GSR', 'blue', 'white');
        expect(circle.render()).toEqual(`
        <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='150' cy='100' r='100' fill='blue'/>
            <text x='150' y='120' font-size='75' text-anchor='middle' fill='white'>
                GSR
            </text>
        </svg>`
        );
    });
});

