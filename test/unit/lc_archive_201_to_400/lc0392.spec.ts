xdescribe('leetcode 392: is subsequence', () => {
    function isSubsequence(s: string, t: string): boolean {
        let sIndex = 0;
        let tIndex = 0;

        while (sIndex < s.length && tIndex < t.length) {
            if (s[sIndex] === t[tIndex]) {
                sIndex++;
            }

            tIndex++;
        }

        return sIndex === s.length;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});