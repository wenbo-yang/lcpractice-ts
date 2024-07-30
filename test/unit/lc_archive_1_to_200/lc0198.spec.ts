xdescribe('leetcode 198: house robber', () => {
    function rob(nums: number[]): number {
        // [2,7,9, 3, 1]
        // [2 2,11,11, 12]
        // [0, 7, 0, ]

        // [0, 0, 0, 100, 2, 9, 100, 1];

        const scores = new Array<number>(nums.length + 3).fill(0);

        for (let i = 0; i < nums.length; i++) {
            scores[i + 3] = nums[i] + Math.max(scores[i + 1], scores[i]);
        }

        return Math.max(scores[scores.length - 1], scores[scores.length - 2]);
    }

    it('test case 1 Input [2,7,9, 3, 1] output 12 ', () => {
        expect(rob([2, 7, 9, 3, 1])).toEqual(12);
    });

    it('test case 1 Input [100, 7, 9, 100, 1] output 200', () => {
        expect(rob([100, 7, 9, 100, 1])).toEqual(200);
    });
});
