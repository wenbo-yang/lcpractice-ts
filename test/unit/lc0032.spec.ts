xdescribe('leetcode 32: Longest Valid Parentheses', () => {
    function longestValidParentheses(s: string): number {
        const stack: number[] = [];
        const validParentheses: number[][] = []
        let longest = 0;
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === '(') {
                stack.push(i);
            }

            if (s.charAt(i) === ')' && stack.length > 0) {
                const openIndex: number = stack[stack.length - 1];
                stack.pop();
                let current = [openIndex, i];

                let k = validParentheses.length - 1;
                while (k >= 0) {
                    const prev = validParentheses[k];
                    if (current[1] > prev[1] && current[0]< prev[0]) {
                        validParentheses.pop();
                    }
                    else if (prev[1] + 1 === current[0]) {
                        current[0] = prev[0];
                        validParentheses.pop();
                        break;
                    }
                    else {
                        break;
                    }
                    k--;
                }
                
                validParentheses.push(current);
                longest = Math.max(longest, current[1] - current[0] + 1);
            }
        }

        return longest;
    };

    it('test case 1 Input: s = "(()", output 2', () => {
        const s = '(()';
        const result = longestValidParentheses(s);

        expect(result).toEqual(2);
    });

    it('test case 2 Input: s = ")()())", output 4', () => {
        const s = ')()())';
        const result = longestValidParentheses(s);

        expect(result).toEqual(4);
    });

    it('test case 3 Input: s = "()", output 2', () => {
        const s = '()';
        const result = longestValidParentheses(s);

        expect(result).toEqual(2);
    });

    it('test case 4 Input: s = ")(())(()()))(", output 10', () => {
        const s = ')(())(()()))(';
        const result = longestValidParentheses(s);

        expect(result).toEqual(10);
    });
});


