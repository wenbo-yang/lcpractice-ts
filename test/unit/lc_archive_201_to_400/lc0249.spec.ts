xdescribe('leetcode 249: group shifted strings', () => {
    function groupShiftedString(sArray: string[]): string[][] {
        const map = new Map<number, Set<string>>();

        for (const s of sArray) {
            const sLength = s.length;

            if (!map.get(sLength)) {
                map.set(sLength, new Set<string>());
            }

            if (isShiftedString(s)) {
                map.get(sLength)?.add(s);
            }
        }

        const result = Array.from(map.values()).map((r) => Array.from(r.values()));

        return result;
    }

    function isShiftedString(s: string): boolean {
        for (let i = 1; i < s.length; i++) {
            if (s[i].charCodeAt(0) - s[i - 1].charCodeAt(0) !== 1 && s[i] !== 'a' && s[i - 1] !== 'z') {
                return false;
            }
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
