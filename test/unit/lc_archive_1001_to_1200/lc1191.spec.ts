xdescribe('leetcode 1191: k cancatenation maximum sum', () => {

    function kConcatenationMaxSum(arr: number[], k: number): number {
        const MOD: number = 1e9 + 7;
        let sumOfArray: number = 0, maxPrefixSum: number = 0, minPrefixSum: number = 0, maxSubarraySum: number = 0;

        for (const num of arr) {
            sumOfArray = (sumOfArray + num) % MOD; 
            maxPrefixSum = Math.max(maxPrefixSum, sumOfArray); 
            minPrefixSum = Math.min(minPrefixSum, sumOfArray); 
            maxSubarraySum = Math.max(maxSubarraySum, (sumOfArray - minPrefixSum + MOD) % MOD); 
        }

        let result: number = maxSubarraySum;

        if (k === 1) {
            return result;
        }

        let maxSuffixSum: number = (sumOfArray - minPrefixSum + MOD) % MOD; 
        result = Math.max(result, (maxPrefixSum + maxSuffixSum) % MOD); 

        if (sumOfArray > 0) {
            result = Math.max(result, (maxPrefixSum + ((k - 2) * sumOfArray + maxSuffixSum) % MOD) % MOD);
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
