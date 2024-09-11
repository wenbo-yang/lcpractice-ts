xdescribe('leetcode 573: squirrel simulation', () => {
    function squirrelSimulation(row: number, col: number, tree: number[], squirrel: number[], nuts: number[][]): number {
        let distance = 0;
        for (const nut of nuts) {
            distance += Math.abs(tree[0] - nut[0]) + Math.abs(tree[1] - nut[1]);
        }

        distance *= 2;
        let minDistance = Number.MAX_SAFE_INTEGER;
        let index = 0;
        for (let i = 0; i < nuts.length; i++) {
            const d = Math.abs(squirrel[0] - nuts[i][0]) + Math.abs(squirrel[1] - nuts[i][1]);
            if (d < minDistance) {
                index = i;
                minDistance = d;
            }
        }
        
        distance += minDistance;
        distance -= Math.abs(tree[0] - nuts[index][0]) + Math.abs(tree[1] - nuts[index][1]);

        return distance;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
