xdescribe('leetcode 1181: before and after the buzzle', () => {
    function beforeAndAfterPuzzles(phrases: string[]): string[] {
        const lastMap = new Map<string, number[]>();
        const firstMap = new Map<string, number[]>();

        let index = 0;
        phrases.forEach(p => {
            const split = p.split(' ');
            firstMap.set(split[0], (firstMap.get(split[0]) || []).concat(index));
            index++;
        });

        const result: string[] = [];

        for (let i = 0; i < phrases.length; i++) {
            const split = phrases[i].split('');

            const matchFirstWordIndices = firstMap.get(split[split.length - 1])!;

            for (const j of matchFirstWordIndices) {
                if (j === i) continue;
                const substring = phrases[j].substring(phrases[j].indexOf(' ') + 1);
                result.push(phrases[i] + substring);
            }
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
