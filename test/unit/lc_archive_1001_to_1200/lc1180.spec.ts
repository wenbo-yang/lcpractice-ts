xdescribe('leetcode 1180: count substrings with only one distinct letter', () => {
    function countLetters(s: string): number {
        let l = 0;
        let r = 0;

        let sum = 0;
        while (r <= s.length) {
            if (s[l] === s[r]) {
                r++;
            }
            else {
                sum += (r - l + 1) * (r - l) / 2;
                l = r;
            }
        }

        return sum;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
