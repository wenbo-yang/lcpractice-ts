xdescribe('leetcode 80: remove duplicates from sorted array', () => {
    function removeDuplicates(nums: number[]): number {
        let n: number = nums.length;
        if (n <= 2) return n;

        let index = 1;
        let len = 1;
        let last = nums[0];

        while (index < n) {
            let count = 1;
            while (index < n && nums[index] == last) {
                ++count;
                ++index;
            }

            if (count >= 2) nums[len++] = last;

            if (index < n) {
                last = nums[index++];
                nums[len++] = last;
            }
        }

        return len;
    }

    it('test case 1 Input: nums = [1,1,1,2,2,3], target = 5, output 5 ', () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const result = removeDuplicates(nums);

        expect(result).toEqual(5);
    });
});
