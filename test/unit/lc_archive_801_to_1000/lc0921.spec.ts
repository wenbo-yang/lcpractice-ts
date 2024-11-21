xdescribe('leetcode 921: min add to make parentheses valid', () => {
    function minAddToMakeValid(s: string): number {
        const stack: string[] = [];
        for (const c of s) {
            const last = lastOf(stack);
            
            if (last === '(' && c === ')') {
                stack.push(c);
            } 
        }

        return stack.length;
    };

    function lastOf(stack: string[]) {
        return stack[stack.length - 1] || '';
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


