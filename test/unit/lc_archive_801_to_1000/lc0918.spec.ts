xdescribe('leetcode 918: maximum sum circular sub array', () => {
    function maxSubarraySumCircular(nums: number[]): number {
        // [5, -3, 5]  
        
        const prefixSum: number[] = [];
        nums.forEach(n => prefixSum.push((prefixSum[prefixSum.length - 1] || 0) + n));

        const prefixMax: number[] = [];
        prefixSum.forEach(p => prefixMax.push(Math.max(prefixMax[prefixMax.length - 1] || Number.MIN_SAFE_INTEGER), p));

                
        const suffixSum: number[] = [];
        nums.reverse().forEach(n => suffixSum.push((suffixSum[suffixSum.length - 1] || 0) + n));
        suffixSum.reverse();
        
        let max = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < suffixSum.length; i++) {
            max = Math.max(max, suffixSum[i] + (prefixMax[i - 1] || Number.MIN_SAFE_INTEGER));
        }

        return max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
