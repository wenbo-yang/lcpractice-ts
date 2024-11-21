xdescribe('leetcode 1021: remove outermost parentheses', () => {
    function removeOuterParentheses(s: string): string {
        let result = '';
        let depth = 0; 
        for (const char of s) {
            if (char === '(') {
                depth++;
                if (depth !== 1) {
                    result += char;
                }
            } else if (char === ')') {
                depth--;
                if (depth !== 0) {
                    result += char;
                }
            }
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
