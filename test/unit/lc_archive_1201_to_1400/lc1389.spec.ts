xdescribe('leetcode 1389: create target array in the given order', () => {
    function createTargetArray(nums: number[], index: number[]): number[] {
        const map = new Map<number, number[]>();

        for(let i = 0; i < index.length; i++) {
            map.set(index[i], (map.get(index[i]) || []).concat(nums[i]));
        }

        const sortedIndex = Array.from(map.entries()).sort((a,b) => a[0] - b[0]);

        const result: number[] = [];

        sortedIndex.forEach(kv => {
            while(kv[1].length) {
                result.push(kv[1].pop() || 0);
            }
        });

        return result;
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
