xdescribe('leetcode 1063: number of valid subarrays', () => {
    function validSubarrays(nums: number[]): number {
        const arrayLength = nums.length;
        const stack: number[] = [];
        let countValidSubarrays = 0;
        for (let index = arrayLength - 1; index >= 0; --index) {
            while (stack.length && nums[stack[stack.length - 1]] >= nums[index]) {
                stack.pop();
            }
            countValidSubarrays += (stack.length ? stack[stack.length - 1] : arrayLength) - index;
          
            stack.push(index);
        }

        return countValidSubarrays;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
