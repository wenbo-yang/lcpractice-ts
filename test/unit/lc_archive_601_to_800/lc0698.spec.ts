xdescribe('leetcode 698: partition to k equal sum subsets', () => {
    function canPartitionKSubsets(nums: number[], k: number): boolean {
        const sum = nums.reduce((a,b) => a + b);
        if (sum % k !== 0) {
            return false;
        }

        const target = sum / k;
        nums.sort((a,b) => a - b);

        return dfs(nums, target, 0 , k, 0);
    };

    function dfs(nums: number[], target: number, cur: number, k: number, used: number) {
        if (k == 0) return used == (1 << nums.length) - 1;
        for (let i = 0; i < nums.length; ++i) {
          if (used & (1 << i)) continue;
          let t = cur + nums[i];
          if (t > target) break; // Important
          let newUsed = used | (1 << i);
          if (t == target && dfs(nums, target, 0, k - 1, newUsed)) return true; 
          else if (dfs(nums, target, t, k, newUsed)) return true;
        }
        return false;
      }  

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
