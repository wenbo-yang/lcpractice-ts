xdescribe('leetcode 1079: letter tile possiblities', () => {
    function numTilePossibilities(tiles: string): number {
        const count: number[] = new Array(26).fill(0);
    
        for (const tile of tiles) {
            count[tile.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }
    
        return dfs(count);
    };

    function dfs(count: number[]): number{
        let sum = 0;

        for (let i = 0; i < 26; ++i) {
            if (count[i] > 0) {
                sum++;
                count[i]--;
                sum += dfs(count);
                count[i]++;
            }
        }
        return sum;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
