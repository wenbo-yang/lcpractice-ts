xdescribe('leetcode 1133: largest unique number', () => {
    function largestUniqueNumber(nums: number[]): number {
        const map = new Map<number, number>();
        nums.forEach(n => map.set(n, map.get(n) || 0 + 1));

        let max = -1;

        for (const kv of nums.entries()) {
            if (kv[1] === 1 && kv[0] > max) {
                max = kv[0];
            }
        }

        return max;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
