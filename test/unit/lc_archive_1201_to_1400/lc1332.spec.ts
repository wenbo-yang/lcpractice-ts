xdescribe('leetcode 1332: remove palidromic subsequences', () => {
    function removePalindromeSub(s: string): number {
        for (let startIndex = 0, endIndex = s.length - 1; startIndex < endIndex; startIndex++, endIndex--) {
            if (s[startIndex] !== s[endIndex]) {
                return 2;
            }
        }
        return 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
