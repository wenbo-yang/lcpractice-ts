xdescribe('leetcode 330: min patches', () => {
    function minPatches(nums: number[], n: number): number {
        let miss: number = 1, i: number = 0, patches: number = 0;
        while (miss <= n) {
            if (i < nums.length && nums[i] <= miss ) {
                miss += nums[i]
                i++;
            }
            else {
                miss *= 2;
                patches++
            }
        }

        return patches;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});