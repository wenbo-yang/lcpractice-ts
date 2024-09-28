xdescribe('leetcode 682: description', () => {
    function calPoints(operations: string[]): number {
        const stack: number[] = [];

        for (const o of operations) {
            if (Number(o)) {
                stack.push(Number(o));
            }

            if (o === 'C') {
                stack.pop();
            }

            if (o === 'D') {
                stack.push(stack[stack.length - 1] * 2);
            }

            if (o === '+') {
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            }
        }

        return stack.length === 0 ? 0 : stack.reduce((a, b) => a+b);
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
