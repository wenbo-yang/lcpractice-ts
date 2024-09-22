xdescribe('leetcode 665: check possibility', () => {
    function checkPossibility(nums: number[]): boolean {
        let lastMax = nums[0];
        const monoStack: number[] = [0];
        let modified = false;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (num < nums[monoStack[monoStack.length - 1]]) {
                if (modified) {
                    return false;
                }
                else {
                    modified = true;
                    nums[i] = nums[monoStack[monoStack.length - 1]];
                } 
            }
            else {
                monoStack.push(i);
            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
