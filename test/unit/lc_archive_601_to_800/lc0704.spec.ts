xdescribe('leetcode 704: binary search', () => {
    function search(nums: number[], target: number): number {
        
        let l = 0;
        let r = nums.length - 1;

        while(l < r) {
            let pivot = Math.floor((l + r) / 2);
            if (nums[pivot] === target) {
                return pivot;
            }

            if (nums[pivot] > target) {
                r = pivot;
            }

            if (nums[pivot] < target) {
                l = pivot + 1;
            }
        }

        return -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
