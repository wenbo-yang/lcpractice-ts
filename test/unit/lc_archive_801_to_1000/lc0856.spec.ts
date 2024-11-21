xdescribe('leetcode 856: description', () => {
    function scoreOfParentheses(s: string): number {
        const stack: (string | number)[] = [0];
        for (const c of s) {
            if (c === '(') {
                stack.push('(');
            }
            if (c === ')') {
                if (lastOf(stack) === '(') {
                    stack.pop();
                    const value = Number(stack.pop() || 0) + 1;
                    stack.push(value);
                }
                else {
                    const value = Number(stack.pop() || 0);
                    stack.pop();
                    stack.push(2 * value);
                }
            }
        }

        return Number(stack[0]);
    };

    function lastOf(stack: (string | number)[]) {
        return stack[stack.length - 1];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


