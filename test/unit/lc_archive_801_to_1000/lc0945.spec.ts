
xdescribe('leetcode 945: min increment to make array unique', () => {
    function minIncrementForUnique(nums: number[]): number {
        // [3,5,4,2,1,7] // 
        // get count map, get min, and array of empty buckets;

        const min = Math.min(...nums);
        let offset = 0;
        const map = new Map<number, number>()
        new Array<number[]>(nums.length).fill([]).forEach(r => map.set(min + offset++, 0));
        nums.forEach(n => map.set(n, (map.get(n) || 0 + 1)));
        const emptyBuckets: number[] = [];
        Array.from(map).forEach(e => { if (e[1] === 0) { emptyBuckets.push(e[0]); map.delete(e[0]); } });
        let index = 0;
        let count = 0;
        for (const entry of map.entries()) { // already sorted from min to max, as well as emptybuckets
            while (entry[1] > 1) {
                count += emptyBuckets[index] - entry[0];
                index++;
            }
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
