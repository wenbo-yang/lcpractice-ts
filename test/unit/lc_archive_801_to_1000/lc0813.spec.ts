xdescribe('leetcode 813: larges sum of averages ', () => {
    function largestSumOfAverages(nums: number[], k: number): number {
        const mem = new Array<Array<number>>(nums.length).fill([]).map(r => new Array<number>(nums.length).fill(0));
        let index = 1;
        const prefixSum: number[] = new Array<number>(nums.length + 1).fill(0).map(r => prefixSum[index - 1] + nums[index++ - 1] );

        return dfs(0, k, mem, prefixSum, nums);
    };

    function dfs(start: number, partitions: number, mem: number[][], prefixSum: number[], nums: number[]): number {
        if (start === nums.length) return 0; // Base case: no more elements to partition
        if (partitions === 1) // Base case: only one partition is left
            return (prefixSum[nums.length] - prefixSum[start]) / (nums.length - start);

        if (mem[start][partitions] > 0) return mem[start][partitions]; // If value already computed, return it

        let maxAverage: number = 0;
        for (let end = start; end < nums.length; ++end) {
            const currentAverage: number = (prefixSum[end + 1] - prefixSum[start]) / (end - start + 1);
            const restAverage: number = dfs(end + 1, partitions - 1, mem, prefixSum, nums);
            maxAverage = Math.max(maxAverage, currentAverage + restAverage); // Update maxAverage if the sum of averages is larger
        }

        return mem[start][partitions] = maxAverage; // Memoize and return the result
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
