xdescribe('leetcode 772: description', () => {
    function evaluateExpression(expression: string): string {
        const ex = expression.replace(' ', '')
        return evaluateExpressionHelper(ex);
    }

    function evaluateExpressionHelper(ex: string): string {
        while(ex.indexOf('(') !== -1) {
            const startingIndex = ex.indexOf('(');
            const endindIndex = findClosingBacket(ex, startingIndex);

            const start = ex.substring(0, startingIndex);
            const mid = ex.substring(startingIndex, endindIndex);
            const end = ex.substring(endindIndex);

            const midValue = evaluateExpressionHelper(mid);

            if (midValue === 'NaN') {
                return 'NaN';
            }

            ex = start + midValue + end;
        }

        let index = 0;
        while(ex[index]) {
            if (ex[index] === '*' || ex[index] === '/') {
                const operator = index;

                let leftIndex = operator - 1;
                while(Number(ex[leftIndex])) {
                leftIndex--;
                }

                let rightIndex = operator + 1;
                while(Number(ex[rightIndex])) {
                    rightIndex++;
                }

                const start = ex.substring(0, leftIndex + 1);
                const mid = evaluateMultiNDiv(ex, leftIndex + 1, operator, rightIndex);
                const end = ex.substring(rightIndex);

                if (mid === 'NaN') {
                    return 'NaN';
                }

                ex = start + mid + end;
                index = leftIndex + mid.length;
            }
            else {
                index++;
            }
        }

        return evaluatePlusMinus(ex);
    }

    function findClosingBacket(ex: string, index: number) {
        const stack: number[] = [index];
    
        while (stack.length) {
            if (ex[index++] === ')') {
                stack.pop();
            }
    
        }
    
        return index;
    }
    
    function evaluatePlusMinus(ex: string): string {
        let index = 0;
        const left: string[] = []
        while (Number(ex[index])) {
            left.push(ex[index++]);
        }

        if (ex[index] === '+') {
            return (Number(left.join('')) + Number(evaluatePlusMinus(ex.substring(left.length)))).toString();
        }
        else if (ex[index] === '-') {
            return (Number(left.join('')) - Number(evaluatePlusMinus(ex.substring(left.length)))).toString();
        }

        return left.join('');
    }

    function evaluateMultiNDiv(ex: string, leftIndex: number, operator: number, rightIndex: number) {
        const left = Number(ex.substring(leftIndex, operator));
        const right = Number(ex.substring(operator + 1, rightIndex));

        if (ex[operator] === '*') {
            return (left * right).toString();
        }

        return right === 0 ? 'NaN' : Math.floor(left / right).toString();
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





