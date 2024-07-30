xdescribe('leetcode 205: isomophic strings', () => {
    function isIsomorphic(s: string, t: string): boolean {
        if (!s && !t) {
            return true;
        }

        if (s.length != t.length) {
            return false;
        }

        const map: Map<string, string> = new Map();

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
                return false;
            }

            map.set(s[i], t[i]);
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
