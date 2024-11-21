xdescribe('leetcode 884: uncommon words', () => {
    function uncommonFromSentences(s1: string, s2: string): string[] {
        const set1 = new Set<string>(s1.split(' '));
        const set2 = new Set<string>(s2.split(' '))

        const uncommon: string[] = [];

        for (const s of set1) {
            if (!set2.has(s)) {
                uncommon.push(s);
            }
        }


        for (const s of set2) {
            if (!set1.has(s)) {
                uncommon.push(s);
            }
        }

        return uncommon;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
