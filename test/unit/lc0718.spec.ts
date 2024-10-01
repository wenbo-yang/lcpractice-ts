xdescribe('leetcode 718: maximum length of repeated subarray', () => {
    function findLength(nums1: number[], nums2: number[]): number {
        const set1 = new Set<string>();
        for (let i = 0; i < nums1.length; i++) {
            findSubArrays(nums1, i, set1);
        }

        const set2 = new Set<string>();
        for (let i = 0; i < nums2.length; i++) {
            findSubArrays(nums2, i, set2);
        }

        let max = 0;
        for(const item of set1) {
            if (set2.has(item)) {
                max = Math.max(item.split(',').length, max);
            }
        }

        return max;
    };

    function findSubArrays(nums: number[], i: number, set1: Set<string>) {
        const array: number[] = [];
        for(let j = i; j < nums.length; j++ ) {
            array.push(nums[i]);
            set1.add(array.join());
        }
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


