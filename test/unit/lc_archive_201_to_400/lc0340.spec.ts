describe('leetcode 340: longest substring with at most k distinct characters ', () => {
    function longestSubstringWithAtMostKChars(s: string, k: number) {
        let l: number = 0;
        let r: number = 0;
        let currentResult = 0;
        let distinctCharMap = new Map<string, Set<number>>();
        while (r < s.length) {
            addToDistinctCharMap(s[r], r, distinctCharMap);

            if (distinctCharMap.size === k + 1) {
                currentResult = Math.max(r - l, currentResult);
                l = removeCharUntilOnlyKExistInMap(s, l, distinctCharMap, k);
            }

            r++;
        }

        return currentResult || s.length;
    }

    function addToDistinctCharMap(char: string, index: number, distinctCharMap: Map<string, Set<number>>) {
        const indices = distinctCharMap.get(char) || new Set<number>();
        indices.add(index);
        distinctCharMap.set(char, indices);
    }

    function removeCharUntilOnlyKExistInMap(s: string, index: number, distinctCharMap: Map<string, Set<number>>, k: number): number {
        while (distinctCharMap.size > k) {
            const indices = distinctCharMap.get(s[index]);
            if (indices) {
                indices.delete(index);
            }

            if (indices && indices.size === 0) {
                distinctCharMap.delete(s[index]);
            }

            index++;
        }

        return index;
    }

    it('test case 1 Input: s = "eceba", k = 2, output = 3 ', () => {
        expect(longestSubstringWithAtMostKChars('eceba', 2)).toEqual(3);
    });

    it('test case 2 Input: s = "eceba", k = 3, output = 4 ', () => {
        expect(longestSubstringWithAtMostKChars('eceba', 3)).toEqual(4);
    });

    it('test case 3 Input: s = "eceba", k = 5, output = 5', () => {
        expect(longestSubstringWithAtMostKChars('eceba', 5)).toEqual(5);
    });
});
