xdescribe('leetcode 242: valid anagram', () => {
    function isAnagram(s: string, t: string): boolean {
        const map: Map<string, number> = new Map();

        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            if (!map.has(t[i])) {
                return false;
            }

            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }

        for (const val of map.values()) {
            if (val !== 0) {
                return false;
            }
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
