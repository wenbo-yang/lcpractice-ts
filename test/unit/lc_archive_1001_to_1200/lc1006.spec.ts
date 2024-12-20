xdescribe('leetcode 1006: clumsy factorial', () => {
    function clumsy(n: number): number {
        const stack: number[] = [];
        stack.push(n); 
    
        let operation = 0;
    
        for (let i = n - 1; i > 0; i--) {
            if (operation === 0) {
                stack.push(stack.pop()! * i);
            } else if (operation === 1) {
                stack.push(Math.floor(stack.pop()! / i));
            } else if (operation === 2) {
                stack.push(i);
            } else {
                stack.push(-i);
            }
            operation = (operation + 1) % 4;
        }
        let result = 0;
        while (stack.length) {
            result += stack.pop()!;
        }
    
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
