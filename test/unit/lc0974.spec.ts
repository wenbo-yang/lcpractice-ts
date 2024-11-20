xdescribe('leetcode 974: subarray sums divisible by k', () => {
    function subarraysDivByK(nums: number[], k: number): number {
        const countMap = new Map<number, number>();
        countMap.set(0, 1);
    
        let cumulativeSum = 0;
        let answer = 0;

        for (const num of nums) {
            cumulativeSum += num;
            const modValue = ((cumulativeSum % k) + k) % k;
            answer += countMap.get(modValue) || 0;
            countMap.set(modValue, (countMap.get(modValue) || 0) + 1);
        }
        return answer;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
