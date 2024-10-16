xdescribe('leetcode 689: maximum sub of three sub arrays', () => {
    function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
        // [1, 2, 1, 2, 6, 7,  5,  1]
        // [   3  3  3  8 13 12 6]

        let sum = 0;
        const sumArray: number[][] = [];
        for (let i = 0; i < nums.length - k; i++) {
            if (i < k ) {
                sum += nums[0];
            }
            else {
                sumArray.push([sum, i - k]);
                sum -= nums[i - k];
                sum += nums[i];
            }
        }

        sumArray.sort((a, b) => b[0] - a[0]);

        sum = 0;

        for (let i = 0; i < sumArray.length - 2; i++) {
            for (let j = i + 1; j < sumArray.length - 1; j++ ) {
                for (let m = j + 1; k < sumArray.length; k++) {
                    if (Math.abs(sumArray[i][1] - sumArray[j][1]) >= k && 
                        Math.abs(sumArray[i][1] - sumArray[m][1]) >= k && 
                        Math.abs(sumArray[j][1] - sumArray[m][1]) >= k ) {
                        const currentSum = sumArray[i][0] + sumArray[j][0] + sumArray[m][0];  
                        if (currentSum > sum) {
                            sum = currentSum;
                        }
                        else {
                            return [sumArray[i][1],sumArray[j][1], sumArray[m][1]].sort();
                        }
                    }
                }
                
            }
        }
        

        return [];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
