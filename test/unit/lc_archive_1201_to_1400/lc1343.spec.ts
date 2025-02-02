xdescribe('leetcode 1343: numner of sub-arrays of size k and average greater than or equal to thresold', () => {
    function numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let sum = 0;
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i < k) {
                sum += arr[i];
            }
            else {
                if ((sum / k) >= threshold) {
                    result++;
                }

                sum = sum - arr[i - k] + arr[i];
            }
        }

        return (sum / k) >= threshold ? result + 1 : result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
