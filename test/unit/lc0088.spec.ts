xdescribe('leetcode 88: merge two sorted array', () => {
    function merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let tail = nums1.length - 1;
        n--;
        m--;
        while (tail >= 0) {
            if (m < 0 || nums2[n] > nums1[m]) {
                nums1[tail] = nums2[n];
                n--;
            } else if (n < 0 || nums2[n] <= nums1[m]) {
                nums1[tail] = nums1[m];
                m--;
            }

            tail--;
        }
    }

    it('test case 1 Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3: output [1,2,2,3,5,6] ', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];

        merge(nums1, 3, nums2, 3);

        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
});
