xdescribe('leetcode 163: find missing ranges', () => {
    function findMissingRanges(nums: number[], lower: number, upper: number): string[] {
        let result: string[] = [];
        for (const num of nums) {
            if (num > lower) {
                result.push(lower + (num - 1 > lower ? '->' + (num - 1) : ''));
            }
            if (num == upper) {
                return result;
            }
            lower = num + 1;
        }

        if (lower <= upper) {
            result.push(lower + (upper > lower ? '->' + upper : ''));
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
