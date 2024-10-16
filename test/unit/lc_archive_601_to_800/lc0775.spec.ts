xdescribe('leetcode 775: description', () => {
    function isIdealPermutation(nums: number[]): boolean {
  
        const n = nums.length;
        let local = 0;
        for (let i = 0; i < n - 1; ++i)
            if (nums[i] > nums[i + 1]) ++local;
        const temp: number[] = []
        let global = mergeSort(nums, 0, n - 1, temp);
        return global === local;
    
    };

    function mergeSort(nums: number[], l: number, r: number, temp: number[]) {
        if (l >= r) return 0;
        const len = r - l + 1;
        let m = Math.floor((r + l) / 2);
        let inv = mergeSort(nums, l, m, temp) + mergeSort(nums, m + 1, r, temp);
            
        let i = l;
        let j = m + 1;
        let k = 0;
        
        while (i <= m && j <= r) {
          if (nums[i] <= nums[j]) {
            temp[k++] = nums[i++];
          } else {
            temp[k++] = nums[j++];
            inv += m - i + 1;
          }
        }
        
        while (i <= m) temp[k++] = nums[i++];
        while (j <= r) temp[k++] = nums[j++];
        
        for (let i = 0; i < len; i++) {
            temp[i] = nums[i + l];
        }
        
        return inv;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

