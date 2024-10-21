xdescribe('leetcode 801: description', () => {
    function minSwap(nums1: number[], nums2: number[]): number {
        const n = nums1.length;
        
        const keep = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
        const swap = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
        
        keep[0] = 0;
        swap[0] = 1;
        
        for (let i = 1; i < n; ++i) {
          if (nums1[i] > nums1[i - 1] && nums1[i] > nums2[i - 1]) {
            keep[i] = keep[i - 1];
            swap[i] = swap[i - 1] + 1;
          }      
          
          if (nums2[i] > nums1[i - 1] && nums1[i] > nums2[i - 1]) {
            swap[i] = Math.min(swap[i], keep[i - 1] + 1);
            keep[i] = Math.min(keep[i], swap[i - 1]);
          }      
        }
          
        return Math.min(keep[keep.length - 1], swap[swap.length - 1]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
