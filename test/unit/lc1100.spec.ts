xdescribe('leetcode 1100: find k length strings with no repeated chars', () => {
    function numKLenSubstrNoRepeats(s: string, k: number): number {
        if (k > 26) {
            return 0;
        }

        let result = 0;
        for (let i = 0; i < s.length - k; i++) {
            const window = s.substring(i, i+k);
            const actualSize = new Set<string>(window.split('')).size;

            if (actualSize === k) {
                result++;
            }
        }

        return result;
    }

    function numKLenSubstrNoRepeatsMap(s: string, k: number): number {
        if (k > s.length || k === 0) {
            return 0;
        }
        
        const map = new Map<string, number>();
        // initialize window

        for(let i = 0; i < k; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        let result = map.size === k ? 1 : 0;

        for (let i = k; i < s.length - k; i++) {
            const outgoingCharCount = (map.get(s[i - 1]) || 0) - 1;
            if (outgoingCharCount === 0) {
                map.delete(s[i - 1]);
            }
            map.set(s[i + k], (map.get(s[i + k]) || 0) + 1);

            result += map.size === k ? 1 : 0;
        }


        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
