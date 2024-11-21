xdescribe('leetcode 961: n repeated element in size 2n array', () => {
    function repeatedNTimes(nums: number[]): number {
        const uniqueElements: Set<number> = new Set();

        for (const element of nums) {
            if (uniqueElements.has(element)) {
                return element;
            }
            uniqueElements.add(element);
        }

        return -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
