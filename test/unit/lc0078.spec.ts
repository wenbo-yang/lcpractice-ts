xdescribe('leetcode 78: subsets', () => {
    function subsets(nums: number[]): number[][] {
        const results: number[][] = [];

        for (let i = 0; i <= nums.length; i++) {
            combine(nums, i, results);
        }

        return results;
    }

    function combine(nums: number[], k: number, results: number[][]) {
        const pickedIndices: number[] = [];
        combinationsHelper(nums, 0, pickedIndices, k, results);
    }

    function combinationsHelper(nums: number[], startingIndex: number, pickedIndices: number[], k: number, results: number[][]) {
        if (k === 0) {
            results.push(pickedIndices.map((i) => nums[i]) || []);
            return;
        }

        for (let i = startingIndex; i < nums.length; i++) {
            pickedIndices.push(i);
            combinationsHelper(nums, i + 1, pickedIndices, k - 1, results);
            pickedIndices.pop();
        }
    }

    it('test case 1 Input: nums = [1,2,3], Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]', () => {
        const nums = [1, 2, 3];

        const results = subsets(nums);
        console.log(results);
        expect(results.length).toEqual(8);
    });
});
