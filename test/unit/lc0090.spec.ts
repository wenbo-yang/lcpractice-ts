xdescribe('leetcode 90: subsets', () => {
    function subsetsWithDup(nums: number[]): number[][] {
        let resultsSet: Set<string> = new Set();

        for (let i = 0; i <= nums.length; i++) {
            combine(nums, i, resultsSet);
        }

        return Array.from(resultsSet).map((r) => {
            if (r === '') {
                return [];
            }

            return r.split(',').map((item) => Number(item));
        });
    }

    function combine(nums: number[], k: number, results: Set<string>) {
        const pickedIndices: number[] = [];
        combinationsHelper(nums, 0, pickedIndices, k, results);
    }

    function combinationsHelper(nums: number[], startingIndex: number, pickedIndices: number[], k: number, results: Set<string>) {
        if (k === 0) {
            results.add((pickedIndices.map((i) => nums[i]) || []).join(','));
            return;
        }

        for (let i = startingIndex; i < nums.length; i++) {
            pickedIndices.push(i);
            combinationsHelper(nums, i + 1, pickedIndices, k - 1, results);
            pickedIndices.pop();
        }
    }

    it('test case 1 nums = [1,2,2], output [[],[1],[1,2],[1,2,2],[2],[2,2]] ', () => {
        const nums = [1, 2, 2];
        const result = subsetsWithDup(nums);

        expect(result.length).toEqual(6);
        expect(result.sort()).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]].sort());
    });
});
