xdescribe('leetcode 930: binary subarrays with sum', () => {
    function numSubarraysWithSum(nums: number[], goal: number): number {
        const prefixSum: number[] = [];
        nums.forEach(n => n + (prefixSum[prefixSum.length - 1] || 0));
        const map = new Map<number, number>();
        let result = 0;
        for(let i = 0; i < prefixSum.length; i++) {
            const sum = prefixSum[i];
            map.set(sum, (map.get(sum) || 0) + 1);
            const diff = prefixSum[i] - goal;
            result += map.get(diff) || 0;
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
