xdescribe('leetcode 1128: number of equivalent domino pairs', () => {
    function numEquivDominoPairs(dominoes: number[][]): number {
        // [[1,2],[1,2],[1,2],[1,2],[1,2]]
        const pairs = new Map<string, number>();
        
        for (const d of dominoes) {
            pairs.set(toKey(d), (pairs.get(toKey(d)) || 0 + 1));
        }

        let count = 0;
        for (const entry of pairs.entries()) {
            if (entry[1] !== 0) {
                count += entry[1] * (entry[1] - 1) / 2;
            }
        }

        return count;
    };

    function toKey(d: number[]): string {
        return d.sort((a,b) => a - b).join();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


