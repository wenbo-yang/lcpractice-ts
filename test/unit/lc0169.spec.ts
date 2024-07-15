xdescribe('leetcode 169: majority element', () => {
    function majorityElement(nums: number[]): number {
        let assumedMajority = nums[0];
        let count = 0;

        for (const num of nums) {
            if (num === assumedMajority) {
                count++;
            } else if (--count == 0) {
                count = 1;
                assumedMajority = num;
            }
        }

        return assumedMajority;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
