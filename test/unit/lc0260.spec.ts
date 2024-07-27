xdescribe('leetcode 260: description', () => {
    function singleNumber(nums: number[]): number[] {
        const set = new Set<number>();

        for(const num of nums) {
            if (set.has(num)) {
                set.delete(num);
            }
            else {
                set.add(num);
            }
        }

        return Array.from(set.values());
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
