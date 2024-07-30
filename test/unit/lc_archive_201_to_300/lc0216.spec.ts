xdescribe('leetcode 216: combination sum', () => {
    function combinationSum3(k: number, n: number): number[][] {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const maxSum = array.slice(array.length - k).reduce((a, b) => a + b);
        const minSum = array.slice(0, k).reduce((a, b) => a + b);

        if (n < minSum || n > maxSum) {
            return [];
        }

        const results: number[][] = [];
        combinationSumHelper(array, [], k, n, results);

        return results;
    }

    function combinationSumHelper(array: number[], pickedIndices: number[], k: number, n: number, results: number[][]): void {
        if (n < 0) {
            return;
        }

        if (pickedIndices.length === k && n !== 0) {
            return;
        }

        if (pickedIndices.length === k && n === 0) {
            results.push(Array.from(pickedIndices.map((i) => array[i])));
            return;
        }

        for (let i = 0; i < array.length; i++) {
            pickedIndices.push(i);
            combinationSumHelper(array, pickedIndices, k, n - array[i], results);
            pickedIndices.pop();
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
