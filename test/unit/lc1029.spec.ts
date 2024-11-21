xdescribe('leetcode 1029: two city scheduling', () => {
    function twoCitySchedCost(costs: number[][]): number {
        costs.sort((firstPair, secondPair) => (firstPair[0] - firstPair[1]) - (secondPair[0] - secondPair[1]));
        const halfLength = costs.length / 2;

        let totalCost = 0;

        for (let i = 0; i < halfLength; ++i) {
            totalCost += costs[i][0];
            totalCost += costs[i + halfLength][1];
        }
        return totalCost;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
