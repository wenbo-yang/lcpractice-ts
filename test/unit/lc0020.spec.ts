xdescribe('leetcode 20: valid parentheses', () =>{
    function isValid(s: string): boolean {
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            if (isOpenning(s.charAt(i))) {
                stack.push(s.charAt(i));
            }

            if (isClosing(s.charAt(i))) {
                const open = stack.pop() || '';
                if(!isMatching(open, s.charAt(i))) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    };

    function isOpenning(s: string): boolean {
        return s === '(' || s === '{' || s === '[';
    }

    function isClosing(s: string): boolean {
        return s === ')' || s === '}' || s === ']';
    }

    function isMatching(open: string, close: string): boolean {
        return (open === '(' && close === ')') || (open === '{' && close === '}') || (open === '[' && close === ']')
    }

    it('test case 1 Input: s = "()", Output: true', () => {
        const s = '()';
        const result = isValid(s);
        expect(result).toBe(true);
    });

    it('test case 2 Input: s = "()[]{}", Output: true', () => {
        const s = '()[]{}';
        const result = isValid(s);
        expect(result).toBe(true);
    });

    it('test case 3 Input:  s = "(]", Output: false', () => {
        const s = '(]';
        const result = isValid(s);
        expect(result).toBe(false);
    });
});
