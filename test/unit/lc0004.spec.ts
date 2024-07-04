
xdescribe('leetcode 4: find median of two sorted arrays', () =>{
    // binary search
    function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const bigger = nums1.length > nums2.length ? nums1 : nums2;
        const smaller = nums2.length <= nums2.length ? nums1 : nums2;


        const k = Math.floor((bigger.length + smaller.length + 1) / 2);
 
        let l = 0;
        let r = smaller.length;
               
        while (l < r) {
            const m1 = l + (r - l) / 2;
            const m2 = k - m1;
            if (smaller[m1] < bigger[m2 - 1])
                l = m1 + 1;
            else
                r = m1;
        }
        
        const m1 = l;
        const m2 = k - l;
        
        const c1 = Math.max(m1 <= 0 ? Number.MIN_SAFE_INTEGER : smaller[m1 - 1], 
                           m2 <= 0 ? Number.MIN_SAFE_INTEGER : bigger[m2 - 1]);
 
        if ((smaller.length + bigger.length) % 2 === 1)
            return c1;    
        
        const c2 = Math.min(m1 >= smaller.length ? Number.MAX_SAFE_INTEGER : smaller[m1], 
                           m2 >= bigger.length ? Number.MAX_SAFE_INTEGER : bigger[m2]);
                
        return (c1 + c2) / 2;
    };


    it('test case 1 nums1 = [1,3], nums2 = [2], output 2', () =>{
        const output = findMedianSortedArrays([1, 3], [2]);
        expect(output).toEqual(2);
    });

    it('test case 2 nums1 = [1,2], nums2 = [3,4] Output: 2.50000', () =>{
        const output = findMedianSortedArrays([1, 2], [3, 4]);
        expect(output).toEqual(2.5);
    });
});


