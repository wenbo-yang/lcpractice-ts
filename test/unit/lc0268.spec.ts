xdescribe('leetcode 268: missing number', () => {
    function missingNumber(nums: number[]): number {
        let max = 0;
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
            sum += nums[i];
        }

        return (max + 1) * (nums.length - 1) / 2 - sum;        
    };

    function missingNumberXor(nums: number[]): number {
        let result = 0;
        for (let i = 1; i <= nums.length; i++) {
            result = result ^ i ^ nums[i - 1];
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
