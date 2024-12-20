xdescribe('leetcode 1151: minimum swaps to group all 1s together', () => {
    function minSwaps(data: number[]): number {
        let i = 0;
        const prefixSum = data.map(d => (data[i++ - 1] || 0) + d);

        const count = prefixSum[prefixSum.length - 1];
        let r = count - 1;
        let max = Number.MAX_SAFE_INTEGER;

        while (r < prefixSum.length) {
            max = Math.max(prefixSum[r] - prefixSum[r - count + 1] + 1, max);
            r++;
        }

        return count - max;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
