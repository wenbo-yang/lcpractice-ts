xdescribe('leetcode 410: description', () => {
    function splitArray(nums: number[], k: number): number {
        const maxMem = new Map<string, number>();
        const sumMem = new Map<string, number>();

        for (let i = 0; i < nums.length; i++) {
            sumMem.set([0, i].join(), (sumMem.get([0, i - 1].join()) || 0) + nums[i]);
        }

        return splitArrayHelper(nums, 0, k, maxMem, sumMem);
    }

    function splitArrayHelper(nums: number[], startingIndex: number, k: number, maxMem: Map<string, number>, sumMem: Map<string, number>): number {
        if (maxMem.has([startingIndex, k].join())) {
            return maxMem.get([startingIndex, k].join()) || 0;
        }

        if (k === 1) {
            const sum = getSum(nums, startingIndex, nums.length - 1, sumMem);
            maxMem.set([startingIndex, k].join(), sum);

            return sum;
        }

        let currentMax = Number.MIN_SAFE_INTEGER;
        for (let i = startingIndex; i < nums.length - k; i++) {
            const currentSum = getSum(nums, startingIndex, i, sumMem);
            currentMax = Math.max(currentSum + splitArrayHelper(nums, i + 1, k - 1, maxMem, sumMem), currentMax);
        }

        maxMem.set([startingIndex, k].join(), currentMax);

        return currentMax;
    }

    function getSum(nums: number[], startingIndex: number, endingIndex: number, sumMem: Map<string, number>): number {
        const large = sumMem.get([0, endingIndex].join()) || Number.MIN_SAFE_INTEGER;
        const small = sumMem.get([0, startingIndex].join()) || Number.MIN_SAFE_INTEGER;

        return large - small + nums[startingIndex];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
