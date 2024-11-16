xdescribe('leetcode 946: description', () => {
    function validateStackSequences(pushed: number[], popped: number[]): boolean {
        const stack: number[] = [];
        let popIndex = 0;
    
        for (const value of pushed) {
            stack.push(value);
            while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
                stack.pop(); 
                popIndex++; 
            }
        }
    
        return popIndex === pushed.length;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
