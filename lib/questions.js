

const colorKeywords = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']

const questions = [
    // Initials
    {
        type: 'input',
        name: 'name',
        message: 'Enter your initials(up to 3 characters):',
        validate: (input) => {
            return input.length < 4 && input.length > 0;
        }
    },
    // Shape selection
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape of your logo',
        choices: ['Circle', 'Square', 'Triangle']
    },
    // Color of Shape
    {
        type: 'list',
        name: 'shapeColorStyle',
        message: 'Will you use a color keyword or hexadecimal to choose the color of your shape?',
        choices: ['Color Keyword', 'Hexadecimal']
    },
    // Select color with color keyword
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a Color Keyword',
        when: (input) => {
            if(input.shapeColorStyle === 'Color Keyword'){
                return true;
            }
            return false;
        },
        validate: (input) => {
            let inputToLower = input.toLowerCase();
            if (colorKeywords.includes(inputToLower)){
                return true;
            }
            return console.log("Please enter a valid Color Keyword");
        }     
    },
    // Select color with hexadecimal
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a hexadecimal number to choose your shape color',
        when: (input) => {
            if (input.shapeColorStyle === 'Hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (input) => {
            const regExVerify = '^#?([a-f0-9]{6}|[a-f0-9]{3})$';
            if (!input.match(regExVerify)) {
                return console.log("Please enter a Hexadecimal")
            }
            return true;
        }
    },

    // Select text color
    {
        type: 'list',
        name: 'textColorStyle',
        message: 'Will you use a color keyword or hexadecimal to choose the color of your logo text?',
        choices: ['Color Keyword', 'Hexadecimal']
    },
    // Select color with color keyword
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a Color Keyword',
        when: (input) => {
            if(input.shapeColorStyle === 'Color Keyword'){
                return true;
            }
            return false;
        },
        validate: (input) => {
            let inputToLower = input.toLowerCase();
            if (colorKeywords.includes(inputToLower)){
                return true;
            }
            return console.log("Please enter a valid Color Keyword");
        }     
    },
    // Select color with hexadecimal
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a hexadecimal number to choose your text color',
        when: (input) => {
            if (input.textColorStyle === 'Hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (input) => {
            const regExVerify = '^#?([a-f0-9]{6}|[a-f0-9]{3})$';
            if (!input.match(regExVerify)) {
                return console.log("Please enter a Hexadecimal")
            }
            return true;
        }
    },  
    
];

module.exports = questions;
