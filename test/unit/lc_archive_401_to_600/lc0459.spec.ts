xdescribe('leetcode 459: description', () => {
    function repeatedSubstringPattern(s: string): boolean {
        // aabbcaabbcaabbc
        // a b a b
        let n = Math.floor(s.length / 2);
        while (n > 2) {
            if (isRepeatablePattern(n, s)) {
                return true;
            }
            n--;
        }

        return false;
    }

    function isRepeatablePattern(n: number, s: string): boolean {
        if (s.length % n === 0) {
            const numberOfPatterns = s.length / n;
            let offset = n;
            while (offset < n * numberOfPatterns) {
                for (let j = 0; j < n; n++) {
                    s[j] === s[offset++];
                }
            }
        }

        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
