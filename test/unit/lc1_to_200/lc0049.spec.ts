xdescribe('leetcode 49: group anagrams', () => {
    function groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>();
        for (const s of strs) {
            const key = getHashKey(s);

            if (!anagrams.has(key)) {
                anagrams.set(key, []);
            }

            anagrams.get(key)?.push(s);
        }

        return Array.from(anagrams.values());
    }

    function getHashKey(s: string): string {
        const letterCount = Array<number>(26).fill(0);

        for (const c of s) {
            letterCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        return letterCount.join();
    }

    it('test case 1 Input: strs = ["eat","tea","tan","ate","nat","bat"], target = 5,  output = [["bat"],["nat","tan"],["ate","eat","tea"]] ', () => {
        const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
        const result = groupAnagrams(strs);

        expect(result).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
    });
});
