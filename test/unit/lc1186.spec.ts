xdescribe('leetcode 1186: max subarray with one deletion', () => {
    function maximumSum(arr: number[]): number {
        const arrLength = arr.length; 
        const dpLeft: number[] = new Array(arrLength); 
        const dpRight: number[] = new Array(arrLength);

        for (let i = 0, currentSum = 0; i < arrLength; ++i) {
            currentSum = Math.max(currentSum, 0) + arr[i];
            dpLeft[i] = currentSum;
        }

        for (let i = arrLength - 1, currentSum = 0; i >= 0; --i) {
            currentSum = Math.max(currentSum, 0) + arr[i];
            dpRight[i] = currentSum;
        }

        let maxSum = Math.max(...dpLeft);
        for (let i = 1; i < arrLength - 1; ++i) {
            maxSum = Math.max(maxSum, dpLeft[i - 1] + dpRight[i + 1]);
        }

        return maxSum;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
