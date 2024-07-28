xdescribe('leetcode 287: find duplicate', () => {
    function findDuplicateSorting(nums: number[]): number {
        nums.sort((a, b) => a - b);

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                return nums[i];
            }
        }

        return NaN;
    }

    function findDuplicateFastSlowPointer(nums: number[]): number {
        let slow = 0;
        let fast = 0;
        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow == fast) {
                break;
            }
        }

        fast = 0;
        while (fast != slow) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
