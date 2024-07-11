xdescribe('leetcode 47: unique permutations', () => {
    function permuteUnique(nums: number[]): number[][] {
        const resultSet: Set<string> = new Set();
        const currentResult: number[] = [];
        const pickedIndices: Set<number> = new Set();

        permutationHelper(nums, 0, pickedIndices, currentResult, resultSet);

        const resultArray = Array.from(resultSet).map((row) => row.split(',').map((item) => Number(item)));

        return resultArray;
    }

    function permutationHelper(nums: number[], startingIndex: number, pickedIndices: Set<number>, currentResult: number[], resultSet: Set<string>) {
        if (currentResult.length === nums.length) {
            resultSet.add(currentResult.join());
        }

        for (let i = 0; i < nums.length; i++) {
            if (pickedIndices.has(i)) {
                continue;
            }

            pickedIndices.add(i);
            currentResult.push(nums[i]);

            permutationHelper(nums, i + 1, pickedIndices, currentResult, resultSet);

            currentResult.pop();
            pickedIndices.delete(i);
        }
    }

    it('test case 1 Input: nums = [1,1,2], output [[1,1,2], [1,2,1], [2,1,1]] ', () => {
        const nums = [1, 1, 2];
        const result = permuteUnique(nums);

        expect(result).toEqual([
            [1, 1, 2],
            [1, 2, 1],
            [2, 1, 1],
        ]);
    });
});
