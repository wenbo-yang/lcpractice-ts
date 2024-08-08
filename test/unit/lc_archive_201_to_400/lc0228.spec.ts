xdescribe('leetcode 228: summary ranges', () => {
    function summaryRanges(nums: number[]): string[] {
        let left = 0;
        let right = 1;
        const result: string[] = [];
        while (right < nums.length) {
            if (nums[right] - 1 !== nums[right]) {
                result.push(evaluateRange(nums, left, right));
                left = right;
            }
            right++;
        }

        result.push(evaluateRange(nums, left, right));

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
function evaluateRange(nums: number[], left: number, right: number): string {
    right = right - 1;

    if (right === left) {
        return nums[left].toString();
    }

    return nums[left] + '->' + nums[right];
}
