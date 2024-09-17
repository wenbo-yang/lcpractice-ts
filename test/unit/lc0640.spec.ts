xdescribe('leetcode 640: solve equations', () => {
    function solveEquation(equation: string): string {
        
        const leftRight = moveAllXToLeftAndConstantsToRight(equation);

        const left = leftRight[0].reduce((a,b) => a + b);
        const right = leftRight[1].reduce((a,b) => a + b);

        if (left !== 0) {
            return `x = ${right / left}`;
        }

        if (left === 0 && right === 0) {
            return 'Infinite Solutions';
        }

        return 'Invalid Solutions';
    };

    function moveAllXToLeftAndConstantsToRight(equation: string): number[][] {
        const equalsIndex = equation.indexOf('=');
        const left: number[] = [];
        const right: number[] = [];
        
        for (let i = 0; i < equation.length; i++) {
            if (equation[i] === 'x' && !isDigit(equation[i - 1])) {
                let sign = 1;
                if (equation[i - 1] === '-') {
                    sign = -1
                }

                if (i > equalsIndex) {
                    sign = sign * -1
                }

                left.push(sign);
                continue;
            }

            let start = i;
            let numberString = ''
            while(isDigit(equation[start])) {
                numberString += equation[start++];
            }

            let sign = 1;
            if (equation[i - 1] === '-') {
                sign = -1
            }

            if (equation[start] === 'x') {
                if (i > equalsIndex) {
                    sign = sign * -1
                }
                left.push(sign * Number(numberString));
            }
            else {
                if (i < equalsIndex) {
                    sign = sign * -1
                }
                right.push(sign * Number(numberString));
            }
        }

        return [left, right];
    }

    function isDigit(c: string)  {
        if(Number(c)) {
            return true;
        }

        return false;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





