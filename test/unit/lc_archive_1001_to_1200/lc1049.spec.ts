xdescribe('leetcode 1049: last stone weight', () => {
    function lastStoneWeightII(stones: number[]): number {
        let sum = stones.reduce((acc, v) => acc + v, 0);

        const target = sum >> 1;

        let dp: number[] = new Array(target + 1).fill(0);

        for (let stone of stones) {
            for (let j = target; j >= stone; --j) {
                dp[j] = Math.max(dp[j], dp[j - stone] + stone);
            }
        }

        return sum - dp[target] * 2;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
