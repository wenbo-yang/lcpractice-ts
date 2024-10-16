xdescribe('leetcode num: description', () => {
    function monotoneIncreasingDigits(n: number): number {
        const s = n.toString().split('').map(n => Number(n));
        let i = 1;
        while (i < s.length && s[i - 1] <= s[i]) {
            i++
        }
        
        
        if (i < s.length) {
            for (; i > 0 && s[i - 1] > s[i]; --i) {
                --s[i - 1];
            }
            ++i;
            for (; i < s.length; ++i) {
                s[i] = 9;
            }
        }
        return Number(s.join(''));
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
