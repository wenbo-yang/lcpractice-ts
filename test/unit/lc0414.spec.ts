xdescribe('leetcode 414: Third Maximum Number', () => {
    function thirdMax(nums: number[]): number {
        const array: number[] = [];
        for (const n of nums) {
            if (!array.includes(n)) {
                array.push(n);
            }

            if (array.length > 3) {
                array.pop();
            }
        }

        return array.sort((a, b) => b - a)[0];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
