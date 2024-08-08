xdescribe('leetcode 324: wiggle sort', () => {
    function wigglesort(nums: number[]): void {
        const sorted = Array.from(nums).sort((a,b) => b - a);
        

        let i = 1;
        let j = 0;
        while (i < nums.length) {
            nums[i] = sorted[j];
            i += 2;
            j += 1;
        }

        i = 0;

        while (i < nums.length) {
            nums[i] = sorted[j];
            i += 2;
            j += 1;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});