xdescribe('leetcode 76: minwindow substring', () => {
    function minWindow(s: string, t: string): string {
        const substringMap = translateSubstringToMap(t);
        let l = 0;
        let r = 0;

        const stringMap: Map<string, number> = copyKeysToStringMap(substringMap);
        let currentWindow = { l: 0, r: 0, length: Number.MAX_SAFE_INTEGER };
        while (r < s.length) {
            if (stringMap.has(s.charAt(r))) {
                stringMap.set(s.charAt(r), (stringMap.get(s.charAt(r)) || 0) + 1);
            }

            while (currentWindowHasEverything(stringMap, substringMap)) {
                currentWindow = currentWindow.length > r - l + 1 ? { l, r, length: r - l + 1 } : currentWindow;
                if (stringMap.has(s.charAt(l))) {
                    stringMap.set(s.charAt(l), (stringMap.get(s.charAt(l)) || 0) - 1);
                }

                l++;
            }

            r++;
        }

        return currentWindow.length === Number.MAX_SAFE_INTEGER ? '' : s.slice(currentWindow.l, currentWindow.r + 1);
    }

    function currentWindowHasEverything(stringMap: Map<string, number>, substringMap: Map<string, number>) {
        for (const k of stringMap.keys()) {
            if ((substringMap.get(k) || Number.MAX_SAFE_INTEGER) > (stringMap.get(k) || Number.MIN_SAFE_INTEGER)) {
                return false;
            }
        }

        return true;
    }

    function translateSubstringToMap(t: string): Map<string, number> {
        const map: Map<string, number> = new Map();
        for (let i = 0; i < t.length; i++) {
            map.set(t.charAt(i), (map.get(t.charAt(i)) || 0) + 1);
        }

        return map;
    }

    function copyKeysToStringMap(substringMap: Map<string, number>): Map<string, number> {
        const stringMap = new Map(substringMap);
        for (const k of substringMap.keys()) {
            stringMap.set(k, 0);
        }

        return stringMap;
    }

    it('test case 1 Input: ADOBECODEBANC, t = "ABC", Output: "BANC" ', () => {
        const s = 'ADOBECODEBANC';
        const t = 'ABC';

        const result = minWindow(s, t);

        expect(result).toEqual('BANC');
    });
});
