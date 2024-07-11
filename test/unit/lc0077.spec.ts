xdescribe('leetcode 77: combination', () => {
    function combine(n: number, k: number): number[][] {
        const results: number[][] = [];
        const pickedIndices: number[] = [];
        const nums = new Array<number>(n);
        combinationsHelper(nums, 0, pickedIndices, k, results);

        return results;
    }

    function combinationsHelper(nums: number[], startingIndex: number, pickedIndices: number[], k: number, results: number[][]) {
        if (k === 0) {
            results.push(pickedIndices.map((i) => i + 1));
            return;
        }

        for (let i = startingIndex; i < nums.length; i++) {
            pickedIndices.push(i);
            combinationsHelper(nums, i + 1, pickedIndices, k - 1, results);
            pickedIndices.pop();
        }
    }

    it('test case 1 Input: n = 4, k = 2, output [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]] ', () => {
        const results = combine(4, 2);
        console.log(results);
        expect(results).toEqual([
            [1, 2],
            [1, 3],
            [1, 4],
            [2, 3],
            [2, 4],
            [3, 4],
        ]);
    });
});
