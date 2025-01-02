xdescribe('leetcode 1249: min move to make valid parentheses', () => {
    function minRemoveToMakeValid(s: string): string {
        let stack: number[] = [];

        for (let i = 0; i < s.length; i++ ) {
            const c = s[i];
            if (c === '(') {
                stack.push(i);
            }

            if (c === ')') {
                if (s[stack[stack.length - 1]] === '(') {
                    stack.pop();
                }
                else {
                    stack.push(i);
                }
            }
        }

        const sArr = s.split('');
        stack.forEach(i => sArr[i] = '');
        return sArr.filter(s => s !== '').join(',');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
