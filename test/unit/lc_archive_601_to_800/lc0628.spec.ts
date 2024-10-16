xdescribe('leetcode 628: maxiumn product', () => {
    function maximumProduct(nums: number[]): number {
        if (nums.length <= 3) {
            return nums.reduce((a, b) => a * b); 
        }

        nums.sort((a,b) => a - b);

        return Math.max(nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3], nums[nums.length - 1] * nums[0] * nums[1])
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
