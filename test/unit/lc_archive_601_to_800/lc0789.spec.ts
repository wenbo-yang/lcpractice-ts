xdescribe('leetcode 789: escape ghosts', () => {
    function escapeGhosts(ghosts: number[][], target: number[]): boolean {
        const steps = Math.abs(target[0]) + Math.abs(target[1]);
        for (const g of ghosts) {
            if (Math.abs(g[0] - target[0]) + Math.abs(g[1] - target[1]) <= steps) {
                return false;
            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
