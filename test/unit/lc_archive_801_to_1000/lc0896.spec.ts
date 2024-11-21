xdescribe('leetcode 896: monotonic array', () => {
    function isMonotonic(nums: number[]): boolean {
        let toneSet = false;
        let increasing = false;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            else {
                if (toneSet) {
                    if (increasing && nums[i] < nums[i - 1]) {
                        return false;
                    }
                    if (!increasing && nums[i] > nums[i - 1]) {
                        return false;
                    }
                }
                else {
                    toneSet = true;
                    if (nums[i] > nums[i - 1]) {
                        increasing = true;
                    }
                }

            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
