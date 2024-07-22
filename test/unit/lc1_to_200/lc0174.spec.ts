xdescribe('leetcode 174: minimum health', () => {
    function calculateMinimumHP(dungeon: number[][]): number {
        const currentHealth = new Array<Array<number>>(dungeon.length + 1).fill([]).map((r) => new Array<number>(dungeon[0].length + 1).fill(Number.MAX_SAFE_INTEGER));
        currentHealth[dungeon.length][dungeon[0].length - 1] = currentHealth[dungeon.length - 1][dungeon[0].length] = 1;

        for (let i = dungeon.length - 1; i >= 0; i--) {
            for (let j = dungeon[0].length - 1; j >= 0; j--) {
                currentHealth[i][j] = Math.max(1, Math.min(currentHealth[i + 1][j], currentHealth[i][j + 1]) - dungeon[i][j]);
            }
        }

        return currentHealth[0][0];
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
