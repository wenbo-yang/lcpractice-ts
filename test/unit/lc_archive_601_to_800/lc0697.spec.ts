xdescribe('leetcode 697: find shortest subarray', () => {
    function findShortestSubArray(nums: number[]): number {
        // [1    2   2      3  1 4 2]
        // [1:1 2:1  2:2:1  3: ]
        // 

        const map = new Map<number, {freq: number, start: number, end: number}>();
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            const count = map.get(nums[i]) || {freq: 0, start: i, end: i};
            count.freq++;
            count.end = i;
            map.set(nums[i], count);
            max = Math.max(count.freq, max);
        }

        const values = Array.from(map.values()).filter(it => it.freq === max);

        let min = Number.MAX_SAFE_INTEGER;

        for(const v of values) {
            min = Math.min((v.end - v.start + 1), min);
        }

        return min;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
