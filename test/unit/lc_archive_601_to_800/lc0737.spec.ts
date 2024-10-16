xdescribe('leetcode 737: are sentences similiar', () => {
    function areSentencesSimilarTwo(sentence1: string[], sentence2: string[], similarPairs: string[][]): boolean {
        if (sentence1.length != sentence2.length) {
            return false;
        }
        let n = similarPairs.length;
        const p = new Array<number>(n << 1);
        for (let i = 0; i < p.length; ++i) {
            p[i] = i;
        }
        const words = new Map<string, number>();
        let idx = 0;
        for (const e of similarPairs) {
            const a = e[0]
            const b = e[1];
            if (!words.has(a)) {
                words.set(a, idx++);
            }
            if (!words.has(b)) {
                words.set(b, idx++);
            }
            p[find(words.get(a) || -1, p)] = find(words.get(b) || -1, p);
        }
        for (let i = 0; i < sentence1.length; ++i) {
            if (sentence1[i] === sentence2[i]) {
                continue;
            }
            if (!words.has(sentence1[i]) || !words.has(sentence2[i])
                || find(words.get(sentence1[i]) || -1, p) != find(words.get(sentence2[i]) || -1, p)) {
                return false;
            }
        }
        return true;
    }

    function find(x: number, p: number[]): number {
        if (p[x] != x) {
            p[x] = find(p[x], p);
        }
        return p[x];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
