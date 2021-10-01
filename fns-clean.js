
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
                // "Integer division" 🤷
                return Math.floor(numberTwo / number);
        }
    }
}

const makeOperatorFunction = (operator) => (number) => ({
    operator, 
    number
});


const plus = makeOperatorFunction('+');
const minus = makeOperatorFunction('-');
const dividedBy = makeOperatorFunction('/');
const times = makeOperatorFunction('*');

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