xdescribe('leetcode 962: max width with ramp', () => {
    function maxWidthRamp(nums: number[]): number {
        const n: number = nums.length; 
        const indexStack: number[] = []; 

        for (let i = 0; i < n; i++) {
            if (indexStack.length === 0 || nums[indexStack[indexStack.length - 1]] > nums[i]) {
                indexStack.push(i);
            }
        }

        let maxRampWidth: number = 0; 

        for (let i = n - 1; i >= 0; i--) {
            while (indexStack.length > 0 && nums[indexStack[indexStack.length - 1]] <= nums[i]) {
                maxRampWidth = Math.max(maxRampWidth, i - indexStack[indexStack.length - 1]);
                indexStack.pop();
            }
            if (indexStack.length === 0) {
                break;
            }
        }

        return maxRampWidth; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
