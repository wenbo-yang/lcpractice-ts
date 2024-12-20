xdescribe('leetcode 1031: max sum of two non overlapping sub arrays', () => {
    function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {
        const n: number = nums.length;
        const prefixSum: number[] = new Array(n + 1).fill(0);

        for (let i = 0; i < n; ++i) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        let maxSum: number = 0; 
        let maxL: number = 0; 
        
        for (let i = firstLen; i + secondLen <= n; ++i) {
            maxL = Math.max(maxL, prefixSum[i] - prefixSum[i - firstLen]);
            maxSum = Math.max(maxSum, maxL + prefixSum[i + secondLen] - prefixSum[i]);
        }

        let maxM: number = 0; 
        for (let i = firstLen; i + firstLen <= n; ++i) {
            maxM = Math.max(maxM, prefixSum[i] - prefixSum[i - secondLen]);
            maxSum = Math.max(maxSum, maxM + prefixSum[i + firstLen] - prefixSum[i]);
        }

        return maxSum;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
