xdescribe('leetcode 150: description', () => {
    function evalRPN(tokens: string[]): number {
        const stack: string[] = [];

        for (let i = 0; i < tokens.length; i++) {
            if (isOperand(tokens[i]) && stack.length > 1) {
                console.log({ i: tokens[i], stack });
                const second = Number(stack.pop());
                const first = Number(stack.pop());
                const result = operate(tokens[i], first, second);
                console.log({ i: tokens[i], stack, result });
                if (result || result === 0) {
                    stack.push(result.toString());
                }
            } else {
                stack.push(tokens[i]);
            }
        }

        return Number(stack[0]); // should have only one thing in stack
    }

    function isOperand(s: string) {
        return s === '+' || s === '-' || s === '*' || s === '/';
    }

    function operate(operation: string, first: number, second: number): number {
        let value: number = NaN;
        if (operation === '+') {
            value = first + second;
        }

        if (operation === '-') {
            value = first - second;
        }

        if (operation === '*') {
            value = first * second;
        }

        if (operation === '/') {
            value = first / second;
        }

        return value < 0 ? Math.ceil(value) : Math.floor(value);
    }

    it('test case 1 Input: tokens = ["2","1","+","3","*"], output 9', () => {
        const tokens = ['2', '1', '+', '3', '*'];
        const result = evalRPN(tokens);

        expect(result).toEqual(9);
    });

    it('test case 2 Input: tokens = ["4","13","5","/","+"], output 9', () => {
        const tokens = ['4', '13', '5', '/', '+'];
        const result = evalRPN(tokens);

        expect(result).toEqual(6);
    });

    it('test case 3 Input: tokens =  ["10","6","9","3","+","-11","*","/","*","17","+","5","+"], output 22', () => {
        const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
        const result = evalRPN(tokens);

        expect(result).toEqual(22);
    });
});
