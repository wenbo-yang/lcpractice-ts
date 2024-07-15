xdescribe('leetcode 161: one edit distance away', () => {
    function oneEditDistanceAway(s1: string, s2: string): boolean {
        const smaller = s1.length < s2.length ? s1 : s2;
        const bigger = s1.length >= s2.length ? s1 : s2;

        if (bigger.length - smaller.length >= 2) {
            return false;
        }

        if (bigger.length - smaller.length === 1) {
            return matching1RemovalSubstring(smaller, bigger);
        }

        return matching1ReplaceSubstring(smaller, bigger);
    }

    function matching1RemovalSubstring(smaller: string, bigger: string): boolean {
        let s = 0;
        let b = 0;

        while (b < bigger.length) {
            if (smaller[s] === bigger[b]) {
                s++;
                b++;
            } else {
                b++;
            }
        }

        return s === smaller.length;
    }

    function matching1ReplaceSubstring(s1: string, s2: string): boolean {
        let replaceCount = 0;

        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                replaceCount++;
            }
        }

        return replaceCount === 1;
    }

    it('test case 1 s = "ab", t = "acb", output = true', () => {
        expect(oneEditDistanceAway('ab', 'acb')).toBeTruthy();
    });

    it('test case 2 s = "1203", t = "1213", output = true', () => {
        expect(oneEditDistanceAway('1203', '1213')).toBeTruthy();
    });

    it('test case 3 s = "cab", t = "ad", output = false', () => {
        expect(oneEditDistanceAway('cab', 'ad')).toBeFalsy();
    });
});
