xdescribe('leetcode 39: combination sum', () =>{
    function combinationSum(candidates: number[], target: number): number[][] {
        const result: number[][] = [];
        const currentSet: number[] = [];
        candidates.sort((a, b) => a - b);

        combinationSumHelper(candidates, 0, target, currentSet, result);        
        return result;
    };

    function combinationSumHelper(candidates: number[], startingIndex: number, currentTarget: number, currentSet: number[], result: number[][]) {
        if (currentTarget === 0) {
            result.push(Array.from(currentSet));
            return;
        }
        
        for (let i = startingIndex; i < candidates.length; i++) {
            if (candidates[i] > currentTarget) {
                break;
            }

            currentSet.push(candidates[i]);
            combinationSumHelper(candidates, i, currentTarget - candidates[i], currentSet, result);
            currentSet.pop();
        }
    }

    it('test case 1 Input: candidates = [2,3,6,7], target = 3, output [[3]] ', () => {
        const candidates = [2, 3, 6, 7];
        const target = 3;
        const result = combinationSum(candidates, target);

        expect(result).toEqual([[3]])
    });

    it('test case 2 Input: candidates = [2,3,6,7], target = 3, output [[3]] ', () => {
        const candidates = [2, 3, 6, 7];
        const target = 7;
        const result = combinationSum(candidates, target);

        expect(result).toEqual([[2, 2, 3], [7]])
    });

    it('test case 3 Input: candidates = [3,12,4], target = 15, output [[3]] ', () => {
        const candidates = [3, 12, 4];
        const target = 15;
        const result = combinationSum(candidates, target);

        expect(result).toContainEqual([3, 12]);
    });
});

