xdescribe('leetcode 734: similiar sentence', () => {
    function areSentencesSimilar(sentence1: string[], sentence2: string[], similarPairs: string[][]): boolean {
        if (sentence1.length != sentence2.length) {
            return false;
        }
        const s = new Set<string>();
        for (const e of similarPairs) {
            s.add(e[0] + "." + e[1]);
        }
        for (let i = 0; i < sentence1.length; ++i) {
            const a = sentence1[i], b = sentence2[i];
            if (a !== b && !s.has(a + "." + b) && !s.has(b + "." + a)) {
                return false;
            }
        }
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
