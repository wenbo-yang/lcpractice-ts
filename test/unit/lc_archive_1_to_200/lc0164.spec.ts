xdescribe('leetcode 164: maximum gap', () => {
    function maximumGap(nums: number[]): number {
        // bucket sort
        const max = Math.max(...nums);
        const min = Math.min(...nums);

        const bucketSize = (max - min) / nums.length + 1;
        const minValues = new Array<number>().fill(Number.MAX_SAFE_INTEGER);
        const maxValues = new Array<number>().fill(Number.MIN_SAFE_INTEGER);

        for (const num of nums) {
            const index = (num - min) / bucketSize;
            minValues[index] = Math.min(minValues[index], num);
            maxValues[index] = Math.max(maxValues[index], num);
        }

        let maxGap = 0;
        let prevMax = maxValues[0];

        for (let i = 1; i < nums.length; i++) {
            if (minValues[i] !== Number.MAX_SAFE_INTEGER) {
                maxGap = Math.max(maxGap, minValues[i] - prevMax);
                prevMax = maxValues[i];
            }
        }

        return prevMax;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
