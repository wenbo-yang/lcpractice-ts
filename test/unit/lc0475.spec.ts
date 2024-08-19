xdescribe('leetcode 475: heat houses', () => {
    function findRadius(houses: number[], heaters: number[]): number {
        houses.sort((a,b) => a - b);
        heaters.sort((a,b) => a - b);

        let ans = 0;
        let i = 0;

        for (const house of houses) {
            while (i + 1 < heaters.length && ((house - heaters[i]) > (heaters[i + 1] - house))) {
                i++;
            }

            ans = Math.max(ans, Math.abs(heaters[i] - house));
        }

        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
