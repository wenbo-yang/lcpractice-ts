xdescribe('leetcode 40: Combination Sum II', () => {
    function combinationSum2(candidates: number[], target: number): number[][] {
        const result: number[][] = [];
        const currentSet: number[] = [];
        candidates.sort((a, b) => a - b);

        combinationSumHelper2(candidates, 0, target, currentSet, result);
        return result;
    }

    function combinationSumHelper2(candidates: number[], startingIndex: number, currentTarget: number, currentSet: number[], result: number[][]) {
        if (currentTarget === 0) {
            result.push(Array.from(currentSet));
            return;
        }

        for (let i = startingIndex; i < candidates.length; i++) {
            if (i > startingIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > currentTarget) {
                break;
            }

            currentSet.push(candidates[i]);
            combinationSumHelper2(candidates, i + 1, currentTarget - candidates[i], currentSet, result);
            currentSet.pop();
        }
    }

    it('test case 1 input [10,1,2,7,6,1,5], target = 8, output 2 ', () => {
        const candidates = [10, 1, 2, 7, 6, 1, 5];
        const target = 8;

        const result = combinationSum2(candidates, target);
        console.log(result);
        expect(result).toEqual([
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6],
        ]);
    });
});
