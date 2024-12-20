xdescribe('leetcode 1060: missing element in sorted array', () => {
    function missingElement(nums: number[], k: number): number {
        const countMissingUpToIndex = (index: number) => {
          return nums[index] - nums[0] - index;
        };
      
        const size: number = nums.length;
      
        if (k > countMissingUpToIndex(size - 1)) {
          return nums[size - 1] + k - countMissingUpToIndex(size - 1);
        }
      
        let left: number = 0;
        let right: number = size - 1;
      
        while (left < right) {
          let mid: number = left + Math.floor((right - left) / 2);
          if (countMissingUpToIndex(mid) >= k) {
            right = mid;
          } else {
            left = mid + 1;
          }
        }
      
        return nums[left - 1] + k - countMissingUpToIndex(left - 1);
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
