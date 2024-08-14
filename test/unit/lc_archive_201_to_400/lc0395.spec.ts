xdescribe('leetcode 395: longest substring with all characters repleated at least k times', () => {
    function longestSubstring(s: string, k: number): number {
        const charMap = new Array<number>(26).fill(0);
        const df = new Array<Array<number>>(s.length).fill([]).map((r) => new Array<number>(26).fill(0));

        for (let i = 0; i < s.length; i++) {
            addToCharMap(s[i], charMap);
            df[i] = Array.from(charMap);
        }

        let longest = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < i; j++) {
                const diff = getDiff(df[i], df[i]);

                if (areAllCharsAtLeastKOr0(diff, k)) {
                    longest = Math.max(longest, i - j + 1);
                }
            }
        }

        return longest < k ? 0 : longest;
    }

    function addToCharMap(char: string, charMap: number[]): void {
        charMap[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    function areAllCharsAtLeastKOr0(charMap: number[], k: number): boolean {
        for (const num of charMap) {
            if (num < k && num !== 0) {
                return false;
            }
        }

        return true;
    }

    function getDiff(charMap1: number[], charMap2: number[]) {
        const array: number[] = new Array<number>(26).fill(0);
        for (let i = 0; i < 26; i++) {
            array[i] = charMap2[i] - charMap1[i];
        }

        return array;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
