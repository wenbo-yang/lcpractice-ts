xdescribe('leetcode 556: next greater element', () => {
    function nextGreaterElement(n: number): number {
        const s = n
            .toString()
            .split('')
            .map((c) => Number(c));
        // 1234321
        const stack: number[] = [s[s.length - 1]];
        for (let i = s.length - 2; i >= 0; i--) {
            if (s[i] >= s[stack[stack.length - 1]]) {
                stack.push(i);
            }

            if (s[i] < s[stack[stack.length - 1]]) {
                swap(s, i, stack[stack.length - 1]);
                return Number(s.map((n) => n.toString()).join(''));
            }
        }

        return -1;
    }

    function swap(s: number[], i: number, j: number) {
        let t = s[i];
        s[i] = s[j];
        s[j] = t;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
