xdescribe('leetcode 162: Find Peak Element', () => {
    function findPeakElement(nums: number[]): number {
        let startingIndex = 0;
        let endingIndex = nums.length - 1; // preventing OOB

        while (startingIndex < endingIndex) {
            let m = startingIndex + Math.floor((endingIndex - startingIndex) / 2);
            // Find the first m s.t. num[m] > num[m + 1]
            if (nums[m] > nums[m + 1]) endingIndex = m;
            else startingIndex = m + 1;
        }

        return startingIndex;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
