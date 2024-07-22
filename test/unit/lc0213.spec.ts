xdescribe('leetcode 213: house robber with circular houses', () => {
    function rob(nums: number[]): number {
        // idea reduce this to linear house
        const robbingFirst = nums[0] + robHelper(nums.slice(2, nums.length - 1));
        const notRobbingFirst = robHelper(nums.slice(1, nums.length));

        return Math.max(robbingFirst, notRobbingFirst);
    }

    function robHelper(nums: number[]): number {
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

    it('test case 1 Input:  nums = [2,3,2], output 3 ', () => {
        expect(rob([2,3,2])).toEqual(3);
    });

    it('test case 2 Input:  nums = [1,2,3,1], output 4 ', () => {
        expect(rob([1,2,3,1])).toEqual(4);
    });
});
