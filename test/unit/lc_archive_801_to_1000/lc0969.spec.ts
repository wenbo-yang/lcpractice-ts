xdescribe('leetcode 969: pancake sorting', () => {
    function pancakeSort(arr: number[]): number[] {
        const output: number[] = []; 
        for (let currentSize = arr.length; currentSize > 1; currentSize--) {
            let maxIndex = 0;
    
            for (let i = 1; i < currentSize; i++) {
                if (arr[i] >= arr[maxIndex]) {
                    maxIndex = i;
                }
            }
    
            if (maxIndex == currentSize - 1) continue;
    
            
            if (maxIndex > 0) {
                reverse(arr, maxIndex);
                output.push(maxIndex + 1);
            }
            reverse(arr, currentSize - 1);
            output.push(currentSize);
        }
    
        return output; // Return the sequence of flips.
    };

    function reverse(nums: number[], end: number): void {
        let start = 0; 
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
