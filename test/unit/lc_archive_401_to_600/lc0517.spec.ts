xdescribe('leetcode 517: super washing machines', () => {
    function findMinMoves(machines: number[]): number {
        const sum = machines.reduce((a, b) => a + b);
        if (sum % machines.length !== 0) {
            return -1;
        }

        const goal = sum / machines.length;
        let steps = 0;
        let count = 0;
        for (const m of machines) {
            count += m - goal;
            steps = Math.max(steps, Math.max(Math.abs(count), m - goal));
        }

        return steps;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
