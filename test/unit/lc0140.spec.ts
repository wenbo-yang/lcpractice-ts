xdescribe('leetcode num: description', () => {
    function wordBreak(s: string, wordDict: string[]): string[] {
        const dictSet: Set<string> = new Set(wordDict);
        const substringMap: Map<string, string[]> = new Map();
        return wordBreakHelper(s, substringMap, dictSet);
    }

    function wordBreakHelper(s: string, substringMap: Map<string, string[]>, dictSet: Set<string>): string[] {
        if (substringMap.has(s)) {
            return substringMap.get(s) || [];
        }

        const subresult: string[] = [];

        if (dictSet.has(s)) {
            subresult.push(s);
        }

        for (let i = 1; i <= s.length; i++) {
            const left = s.slice(0, i);
            const right = s.slice(i);

            if (!dictSet.has(left)) {
                continue;
            }

            let rightStrings = wordBreakHelper(right, substringMap, dictSet);

            subresult.push(left);
            subresult.concat(rightStrings);
        }

        substringMap.set(s, subresult);
        return substringMap.get(s) || [];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
