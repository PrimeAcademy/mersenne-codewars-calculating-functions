/* 
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
 */


/* 

let resultOfFive = five();
let resultOfTimes = times(resultOfFive);
let resultOfSeven = seven(resultOfTimes); */

// Create a higher order function
// 🔌 THE POWER OF CLOSURE 🔌
const makeNumberFunction = (numberTwo) => {
    return (operation) => {
        if (operation === undefined) {
            return numberTwo;
        }

        let { number, operator } = operation;
        // Same as
        // let number = operation.number;
        // let operator = operation.operator;

        switch (operator) {
            case '+':
                return numberTwo + number;
            case '-':
                return numberTwo - number;
            case '*':
                return numberTwo * number;
            case '/':
                return numberTwo / number;
        }
    }
}

/* const seven = (operation) => {

    if (operation === undefined) {
        return 7;
    }

    let { number, operator } = operation;
    // Same as
    // let number = operation.number;
    // let operator = operation.operator;

    switch (operator) {
        case '+':
            return 7 + number;
        case '-':
            return 7 - number;
        case '*':
            return 7 * number;
        case '/':
            return 7 / number;
    }
} */

/* const times = (number) => {
    return {
        operator: '*', 
        number: number
    }
}

const dividedBy = (number) => {
    return {
        operator: '/', 
        number: number
    }
} */

const makeOperatorFunction = (operator) => (number) => ({
    operator, 
    number
});

const plus = makeOperatorFunction('+');
const minus = makeOperatorFunction('-');
const divide = makeOperatorFunction('/');
const times = makeOperatorFunction('*');

/* const five = (operation) => {
    if (operation === undefined) {
        return 5;
    }

    let { number, operator } = operation;

    switch (operator) {
        case '+':
            return 5 + number;
        case '-':
            return 5 - number;
        case '*':
            return 5 * number;
        case '/':
            return 5 / number;
    }
} */

const zero = makeNumberFunction(0);
const one = makeNumberFunction(1);
const two = makeNumberFunction(2);
const three = makeNumberFunction(3);
const four = makeNumberFunction(4);
const five = makeNumberFunction(5);
const six = makeNumberFunction(6);
const seven = makeNumberFunction(7);
const eight = makeNumberFunction(8);
const nine = makeNumberFunction(9);


console.log('seven(times(five()))', seven(times(five())));
console.log('five(times(seven()))', five(times(seven())));
