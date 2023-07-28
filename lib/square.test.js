const Square = require("./square.js");

describe('Square', () => {
    it('should return logo with the user initials, and selection of color, and text color', () => {
        const square = new Square('GSR', 'blue', 'white');
        expect(square.render()).toEqual(`
        <svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            <rect width='200' height='200' fill='blue'/>
            <text x='100' y='125' font-size='80' text-anchor='middle' fill='white'>
                GSR
            </text>
        </svg>`
        );
    });
});