xdescribe('leetcode 60: permutation sequence', () => {
    function getPermutation(n: number, k: number): string {
        const nums = new Array<number>(n).fill(-1);
        const currentlyPickedIndices: number[] = [];

        const results: string[] = [];
        getPermutationHelper(nums, currentlyPickedIndices, results, k);
        return results[k - 1];
    }

    function getPermutationHelper(nums: number[], currentlyPickedIndices: number[], results: string[], k: number) {
        if (results.length >= k) {
            return;
        }

        if (currentlyPickedIndices.length === nums.length) {
            const stringResult = Array.from(currentlyPickedIndices)
                .map((item) => item + 1)
                .join('');
            results.push(stringResult);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!currentlyPickedIndices.includes(i)) {
                currentlyPickedIndices.push(i);
                getPermutationHelper(nums, currentlyPickedIndices, results, k);
                currentlyPickedIndices.pop();
            }
        }
    }

    it('test case 1 Input: n = 3, k = 3, output 213 ', () => {
        const result = getPermutation(3, 3);
        expect(result).toEqual('213');
    });
});
