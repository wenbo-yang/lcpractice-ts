xdescribe('leetcode 128: Longest Consecutive Sequence', () => {
    function longestConsecutive(nums: number[]): number {
        const set: Set<number> = new Set(nums);
        let result = 0;
        for (const num of nums) {
            if (!set.has(num - 1)) {
                // the begining of a sequence // if it is not the begining of a sequence then this check set.has(num - 1) will return true thus fail this check
                let l = 1;
                let temp = num;
                while (set.has(++temp)) {
                    l++;
                }

                result = Math.max(l, result);
            }
        }

        return result;
    }

    it('test case 1 Input [100,4,200,1,3,2], output 4 ', () => {
        const nums = [100, 4, 200, 1, 3, 2];

        const result = longestConsecutive(nums);

        expect(result).toEqual(4);
    });
});
