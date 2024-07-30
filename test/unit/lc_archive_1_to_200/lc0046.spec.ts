xdescribe('leetcode 46: permutations', () => {
    function permute(nums: number[]): number[][] {
        if (nums.length <= 1) {
            return [nums];
        }

        const result: number[][] = [];
        const currentResult: number[] = [];

        permutationHelper(nums, new Set(), currentResult, result);

        return result;
    }

    function permutationHelper(nums: number[], pickedIndices: Set<number>, currentResult: number[], result: number[][]) {
        if (currentResult.length === nums.length) {
            result.push(Array.from(currentResult));
        }

        for (let i = 0; i < nums.length; i++) {
            if (pickedIndices.has(i)) {
                continue;
            }
            pickedIndices.add(i);
            currentResult.push(nums[i]);
            permutationHelper(nums, pickedIndices, currentResult, result);
            currentResult.pop();
            pickedIndices.delete(i);
        }
    }

    it('test case 1 Input: nums = [1,2,3] output [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]], ', () => {
        const nums = [1, 2, 3];
        const result = permute(nums);
    });
});
