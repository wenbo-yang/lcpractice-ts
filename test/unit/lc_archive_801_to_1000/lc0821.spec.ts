xdescribe('leetcode 821: shortest distance to a char', () => {
    function shortestToChar(s: string, c: string): number[] {
        const stack: number[] = [];

        let prevCIndex = -s.length;
        const result : number[] = new Array<number>(s.length).fill(-1);

        for (let i = 0; i < s.length; i++) {
            if (s[i] === c) {
                result[i] = 0;
                while(stack.length) {
                    const index = stack.pop() || 0;
                    result[index] = Math.min(index - prevCIndex, i - index);
                }
                prevCIndex = i;
            }
            else {
                stack.push(i);
            }
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
