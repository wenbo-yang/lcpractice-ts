xdescribe('leetcode 870: advantage shuffle', () => {
    function advantageCount(nums1: number[], nums2: number[]): number[] {
        let index = 0;
        const nums2Sorted = nums2.map(n => [n, index++]).sort((a,b) => a[0] - b[0]);
        nums1.sort((a,b) => a - b);
        const leftOver: number[] = [];
        let l = 0;
        for (let i = 0; i < nums2Sorted.length; i++) {
            while(l < nums1.length && nums1[l] < nums2Sorted[i][0]) {
                leftOver.push(nums1[l])
                l++;
            }
            if (nums1[l]) {
                nums2Sorted[i][0] = nums1[l];
            }
            else {
                break;
            }
        }
        
        l = nums2Sorted.length - 1;
        
        while (leftOver.length) {
            const num = leftOver.pop() || -1;
            nums2Sorted[l--][0] = num;
        }

        return nums2Sorted.sort((a,b) => a[1] - b[1]).map(n => n[0]);
        
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
