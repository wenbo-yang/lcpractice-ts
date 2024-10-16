xdescribe('leetcode 795: description', () => {
    function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
        return count(nums, right) - count(nums, left - 1);
    };

    function count(nums: number[], bound: number ) {
        let ans = 0;
        let cur = 0;
        for (const a of nums) {
          if (a <= bound) 
            ans += ++cur;
          else
            cur = 0;
        }
        return ans;
      }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
