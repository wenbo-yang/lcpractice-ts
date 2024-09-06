xdescribe('leetcode 493: reverse pairs', () => {
    // class Solution {
    //     public:
    //         int reversePairs(vector<int>& nums) {
    //             return mergeSort(nums, 0, nums.size() - 1);
    //         }
    //         int mergeSort(vector<int>& nums, int left, int right) {
    //             if (left >= right) return 0;
    //             int mid = left + (right - left) / 2;
    //             int res = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
    //             for (int i = left, j = mid + 1; i <= mid; ++i) {
    //                 while (j <= right && nums[i] / 2.0 > nums[j]) ++j;
    //                 res += j - (mid + 1);
    //             }
    //             sort(nums.begin() + left, nums.begin() + right + 1);
    //             return res;
    //         }
    //     };

    function reversePairs(nums: number[]): number {
        let index = 0;
        const numIndicesMap = new Map<number, number[]>();

        for (let i = 0; i < nums.length; i++) {
            const currentIndices = numIndicesMap.get(nums[i]) || [];
            currentIndices.push(i);
            numIndicesMap.set(nums[i], currentIndices);
        }

        const numIndicesArray = Array.from(numIndicesMap.entries());

        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            const index = binarySearchFor(Math.floor(nums[i] / 2) - 1, numIndicesArray);
            count += countIndicesGreaterThan(numIndicesArray, index, i);
        }

        return count;
    }

    function binarySearchFor(target: number, numIndicesArray: [number, number[]][]) {
        throw new Error();
    }

    function countIndicesGreaterThan(numIndicesArray: [number, number[]][], index: void, i: number): number {
        throw new Error('Function not implemented.');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
