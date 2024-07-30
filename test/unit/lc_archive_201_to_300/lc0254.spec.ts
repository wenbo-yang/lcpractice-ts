xdescribe('leetcode 254: factor combinations', () => {
    function factorCombinations(num: number): number[][] {
        const results: number[][] = [];
        const current: number[] = [];
        factorCombinationsHelper(num, current, results);

        return results;
    }

    function factorCombinationsHelper(num: number, current: number[], results: number[][]) {
        if (num <= 2) {
            return;
        }

        for (let factor = 2; factor < Math.floor(num / 2); factor++) {
            if (num % factor === 0) {
                current.push(factor);
                factorCombinationsHelper(num, current, results);
                current.pop();
            }
        }
        // a prime number
        results.push(Array.from(current));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
