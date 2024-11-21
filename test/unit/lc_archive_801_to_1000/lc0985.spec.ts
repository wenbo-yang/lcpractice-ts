xdescribe('leetcode 985: sum of even numbers after queries', () => {
    function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
        let sumEven = 0;
        for (const num of nums) {
            if (num % 2 === 0) {
                sumEven += num;
            }
        }

        const result: number[] = [];
        for (const [valueToAdd, index] of queries) {
            if (nums[index] % 2 === 0) {
                sumEven -= nums[index];
            }
            nums[index] += valueToAdd;
    
            if (nums[index] % 2 === 0) {
                sumEven += nums[index];
            }
            result.push(sumEven);
        }
    
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
