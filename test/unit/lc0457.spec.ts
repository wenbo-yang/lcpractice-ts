xdescribe('leetcode 457: circular array loop', () => {
    function circularArrayLoop(nums: number[]): boolean {
        // jump forward and jump full circle to my self

        for (let i = 0; i < nums.length; i++) {
            let next = Number.MAX_SAFE_INTEGER;
            if (nums[i] < 0) {
                next = (((nums[i] + i) % nums.length) + nums.length) % nums.length;
            } else {
                next = (nums[i] + i) % nums.length;
            }

            if (next === i) {
                nums[i] = Number.MAX_SAFE_INTEGER;
                continue;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (tryMove(nums, i)) {
                return true;
            }
        }

        return false;
    }

    function tryMove(nums: number[], startingIndex: number) {
        let index = startingIndex;
        while (nums[index] !== 0 && nums[index] !== Number.MAX_SAFE_INTEGER) {
            const jump = nums[index];
            nums[index] = 0;
            if (jump < 0) {
                index = (((jump + index) % nums.length) + nums.length) % nums.length;
            } else {
                index = (jump + index) % nums.length;
            }
        }

        return nums[index] === 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
