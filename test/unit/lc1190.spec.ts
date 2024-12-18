xdescribe('leetcode 1190: reverse substrings between each pair of parentheses', () => {
    function reverseParentheses(s: string): string {
        const length: number = s.length;
        const mirror: number[] = new Array(length).fill(0);
        const stack: number[] = [];
    
        for (let i = 0; i < length; ++i) {
            if (s[i] === '(') {
                stack.push(i);
            } else if (s[i] === ')') {
                const j = stack.pop() as number; // as number is safe here, because stack is guaranteed to be non-empty
                mirror[i] = j;
                mirror[j] = i;
            }
        }
        let index: number = 0;
        let step: number = 1;
        const result: string[] = [];
    
        while (index < length) {
            const char: string = s.charAt(index);
            if (char === '(' || char === ')') {
                index = mirror[index];
                step = -step;
            } else {
                result.push(char);
            }
            index += step;
        }
        return result.join('');
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
