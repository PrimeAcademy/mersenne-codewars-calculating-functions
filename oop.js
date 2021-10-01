// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

class Operation {
    constructor(props) {
        Object.assign(this, props);
    }

    solve() {
        if (!this.isComplete()) {
            throw new Error(`Operator is incomplete: ${this}`)
        }
        

        let solve = Operation.operators[this.operator];
        return solve(this.n1, this.n2);
    }

    isComplete() {
        return (
            typeof this.n1 === 'number' &&
            typeof this.n2 === 'number' &&
            Object.keys(Operation.operators).includes(this.operator)
        );
    }
}
 
Operation.operators = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
    '*': (n1, n2) => n1 * n2,
    '/': (n1, n2) => Math.floor(n1 / n2),
}


const makeNumberFunction = (number) => {
    return (op) => {
        // No arg was passed, this is the second number
        if (!op) {
            return new Operation({ n2: number });
        }

        // Update the operation with our value
        if (op instanceof Operation) {
            op = new Operation({
                ...op,
                n1: number
            })
        }


        // If all values are filled, solve it
        if (op.isComplete()) {
            return op.solve();
        }
        else {
            return op;
        }
    }
}

const makeOperatorFunction = (operator) => {
    return (op) => {
        // No arg was passed, this is the second number
        if (!op) {
            return new Operation({ operator });
        }
        // If all values are filled, solve it
        if (op.isComplete()) {
            return op.solve();
        }

        // Otherwise, we have a partial operator,
        // add our value to it
        else if (op instanceof Operation) {
            return new Operation({
                ...op,
                operator
            })
        }
    }
}

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

const plus = makeOperatorFunction('+');
const minus = makeOperatorFunction('-');
const times = makeOperatorFunction('*');
const dividedBy = makeOperatorFunction('/');