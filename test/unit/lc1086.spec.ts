xdescribe('leetcode 1086: high five', () => {
    function highFive(items: number[][]): number[][] {
        const map = new Map<number, number[]>();

        for (const it of items) {
            const topFive = map.get(it[0]) || new Array<number>(5).fill(0);
            replaceMin(topFive, it[1]);
            map.set(it[0], topFive);
        }

        return Array.from(map.entries()).map(pair => [pair[0], Math.floor(pair[1].reduce((a,b) => a + b) / 5)]);
    }

    function replaceMin(topFive: number[], num: number): void {
        const min = Math.min(...topFive);
        const index = topFive.findIndex(n => n === min);
        topFive[index] = Math.max(topFive[index], num);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
