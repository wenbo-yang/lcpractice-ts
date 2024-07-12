xdescribe('leetcode num: description', () => {
    function wordBreak(s: string, wordDict: string[]): boolean {
        const dictSet: Set<string> = new Set(wordDict);
        const substringMap: Map<string, boolean> = new Map();
        return wordBreakHelper(s, substringMap, dictSet);
    }

    function wordBreakHelper(s: string, substringMap: Map<string, boolean>, dictSet: Set<string>): boolean {
        if (substringMap.has(s)) {
            return substringMap.get(s) || false;
        }

        if (dictSet.has(s)) {
            substringMap.set(s, true);
            return true;
        }

        for (let i = 1; i <= s.length; i++) {
            const left = s.slice(0, i);
            const right = s.slice(i);

            if (dictSet.has(left) && wordBreakHelper(right, substringMap, dictSet)) {
                substringMap.set(s, true);
                return true;
            }
        }

        substringMap.set(s, false);
        return false;
    }

    it('test case 1 Input :s = "leetcode", wordDict = ["leet","code"], output true ', () => {
        const s = 'leetcode';
        const wordDict = ['leet', 'code'];

        const result = wordBreak(s, wordDict);
        expect(result).toBeTruthy();
    });
});
