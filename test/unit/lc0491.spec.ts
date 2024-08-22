xdescribe('leetcode 491: description', () => {
    function findSubsequences(nums: number[]): number[][] {
        const set = new Set<string>();
        generateSequenceHelper(nums, 0, [], set);

        return Array.from(set.values()).map(s => s.split(',').map(n => Number(n)));
    };


    function generateSequenceHelper(nums: number[], index: number, current: number[], set: Set<string>) {
        if (index >= nums.length) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            if (current.length === 0 || current[current.length - 1] <= nums[i]) {
                current.push(nums[i])
                generateSequenceHelper(nums, i + 1, current, set);
                if (current.length > 1) {
                    set.add(current.toString());
                }
                current.pop();
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

