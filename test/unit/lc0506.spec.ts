xdescribe('leetcode 506: relative ranks', () => {
    function findRelativeRanks(score: number[]): string[] {
        let index: number = 0;
        const rank = score.map((s) => [s, index++, '']);
        rank.sort((a, b) => Number(b[0]) - Number(a[0]));

        for (let i = 0; i < rank.length; i++) {
            if (i === 0) {
                rank[i][2] = 'Gold Medal';
            } else if (i === 1) {
                rank[i][2] = 'Silver Medal';
            } else if (i === 2) {
                rank[i][2] = 'Bronze Medal';
            } else {
                rank[i][2] = (i + 1).toString();
            }
        }

        return rank.sort((a, b) => Number(a[1]) - Number(b[1])).map((r) => r[2].toString());
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
