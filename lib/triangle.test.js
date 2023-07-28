const Triangle = require('./triange.js');
//tests that the shape rendered will match the expected rendering
describe('Triangle', () => {
    it('should return logo with the user initials, and selection of color, and text color', () => {
        const triangle = new Triangle('GSR', 'blue', 'white');
        expect(triangle.render()).toEqual(`
        <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            <polygon points='150, 18 244, 182 56, 182' fill='blue'/>
            <text x='150' y='175' font-size='80' text-anchor='middle' fill='white'>
                GSR
            </text>
        </svg>`
        );
    });
})