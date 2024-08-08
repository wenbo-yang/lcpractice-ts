xdescribe('leetcode 241: description', () => {
    function diffWaysToCompute(expression: string): number[] {
        const indices = findOperandIndices(expression);

        if (indices.length === 0) {
            return [Number(expression)];
        }

        const result: number[] = [];

        for (let index of indices) {
            const left = diffWaysToCompute(expression.slice(0, index));
            const right = diffWaysToCompute(expression.slice(index + 1));

            for (const l of left) {
                for (const r of right) {
                    if (expression[index] === '+') {
                        result.push(l + r);
                    }
                    if (expression[index] === '-') {
                        result.push(l - r);
                    }
                    if (expression[index] === '*') {
                        result.push(l * r);
                    }
                }
            }
        }

        return result;
    }

    function findOperandIndices(expression: string): number[] {
        const indices: number[] = [];
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '*' || expression[i] === '+' || expression[i] === '-') {
                indices.push(i);
            }
        }

        return indices;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
