xdescribe('leetcode 1338: reduce array size to the half', () => {
    function minSetSize(arr: number[]): number {
        const freq = new Map<number, number>();
        arr.forEach(n => freq.set(n, (freq.get(n) || 0) + 1));

        const sorted = Array.from(freq.values()).sort((a, b) => a - b);
        let count: number = 0;
        let total: number = 0;
        while (total < arr.length / 2) {
            total += sorted.pop()!;
            count++;
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
