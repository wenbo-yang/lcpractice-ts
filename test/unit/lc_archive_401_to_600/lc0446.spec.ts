xdescribe('leetcode 446: description', () => {
    function numberOfArithmeticSlices(nums: number[]): number {
        // 777 1
        // 7777 16
        // 77777 16 + 32
        // 3 77 5 7 3 5 7 5 7

        // idea:
        // loop through and build diff map
        // diff map carries diff as key,
        // as well as a map of previous series
        // if found previous and previous have indices less than current,
        // remove that from previousMap, and add current key
        // if currentKey is found in previous Map, update currentkey to have those
        // each previous map consists of unique numbers and set of indices,
        // calculate based on these

        const numberIndexMap = new Map<number, number[]>();
        for (let i = 0; i < nums.length; i++) {
            const indices = numberIndexMap.get(nums[i]) || [];
            indices.push(i);
            numberIndexMap.set(nums[i], indices);
        }

        const diffMap = new Map<number, Map<number, number[][]>>();

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const diff = nums[j] - nums[i];
                const current = diffMap.get(diff) || new Map<number, number[][]>();

                const numberIndicesCountMap = getNumberCountBefore(j, nums, diff);
                current.set(j, numberIndicesCountMap);
                diffMap.set(diff, current);
            }
        }

        return calculateNumberOfArithmetic(diffMap);
    }

    function calculateNumberOfArithmetic(diffMap: Map<number, Map<number, number[][]>>): number {
        throw new Error('Function not implemented.');
    }

    function getNumberCountBefore(j: number, nums: number[], diff: number): number[][] {
        throw new Error('Function not implemented.');
    }

    // function findAllIndicesBefore(i: number, targetNumber: number, map: Map<number, number[]>): number {
    //     // use binary search

    // }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
