xdescribe('leetcode 1402: reducing dishes', () => {
    function maxSatisfaction(satisfaction: number[]): number {
        satisfaction.sort((a, b) => b - a);

        let maxTotalSatisfaction = 0;
        let runningSum = 0;

        for (const satValue of satisfaction) {
            runningSum += satValue;

            if (runningSum <= 0) {
                break;
            }
            maxTotalSatisfaction += runningSum;
        }

        return maxTotalSatisfaction;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
