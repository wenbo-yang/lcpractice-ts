xdescribe('leetcode 159: longest substring with at least 2 distinctive chars', () => {
    function longestSubstring(s: string): number {
        const substringMap: Map<string, number> = new Map();

        let l = 0;
        let r = 0;

        let result = [0, 0];

        while (r < s.length) {
            substringMap.set(s[r], (substringMap.get(s[r]) || 0) + 1);

            if (substringMap.size === 2) {
                result = result[1] - result[0] > r - l ? result : [l, r];
            }

            while (substringMap.size > 2) {
                const count = substringMap.get(s[l]) || 0;
                substringMap.set(s[l], count - 1);
                if (substringMap.get(s[l]) === 0) {
                    substringMap.delete(s[l]);
                }

                l++;
            }

            r++;
        }

        return r - l + 1;
    }

    it('test case 1 Input: eceba,  output 3 ', () => {
        expect(longestSubstring('eceba')).toEqual(3);
    });

    it('test case 1 Input: ccaabbb,  output 5', () => {
        expect(longestSubstring('eceba')).toEqual(3);
    });
});
