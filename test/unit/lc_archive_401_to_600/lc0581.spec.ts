xdescribe('leetcode 581: shortest continuous subarray', () => {
    function findUnsortedSubarray(nums: number[]): number {
        const upperIndex = findOutOfOrderFromEnd(nums);
        const lowerIndex = findOutOfOrderFromFront(nums);

        return upperIndex - lowerIndex + 1;
    };

    function findOutOfOrderFromFront(nums: number[]): number {
        let index = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < (nums[i+1] || Number.MAX_SAFE_INTEGER)) {
                continue;
            }
            else {
                index = i;
            }
        }

        const minIndex = findMinIndexFromIndexToEnd(nums, index);

        const minPosition = findSwapIndexFromFront(nums, minIndex);
        
        return minPosition;
    }



    function findSwapIndexFromFront(nums: number[], minIndex: number): number {
        let index = -1;
        for (let i = nums.length - 1; i >=0; i--) {
            if (nums[i] > nums[minIndex]) {
                index = i;
            }
        }

        const temp = nums[index];
        nums[index] = nums[minIndex];
        nums[minIndex] = temp;
        return index;
    }

    function findMinIndexFromIndexToEnd(nums: number[], index: number): number {
        let min = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;
        for (let i = 0; i < index; i++) {
            if (nums[i] < min) {
                minIndex = i;
                min = nums[i];
            }
        }

        return minIndex;
    }
    

    function findOutOfOrderFromEnd(nums: number[]) {
        let index = 0;
        for (let i = nums.length - 1; i >= 0; i--) {
            if ((nums[i - 1] || Number.MIN_SAFE_INTEGER) < nums[i] ) {
                continue;
            }
            else {
                index = i;
            }
        }

        const maxIndex = findMaxIndexFrom0ToIndex(nums, index);
        const maxPosition = findSwapIndexFromEnd(nums, maxIndex);
        return maxPosition;   
    }
    
    function findMaxIndexFrom0ToIndex(nums: number[], index: number): number {
        let max = Number.MIN_SAFE_INTEGER;
        let maxIndex = -1;
        for (let i = 0; i < index; i++) {
            if (nums[i] > max) {
                maxIndex = i;
                max = nums[i];
            }
        }

        return maxIndex;
    }

    function findSwapIndexFromEnd(nums: number[], maxIndex: number) {
        let index = -1;
        for (let i = nums.length - 1; i >=0; i--) {
            if (nums[i] < nums[maxIndex]) {
                index = i;
            }
        }

        const temp = nums[index];
        nums[index] = nums[maxIndex];
        nums[maxIndex] = temp;
        return index;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



