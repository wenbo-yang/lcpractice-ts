xdescribe('leetcode 1207: unique occurrences', () => {
    function uniqueOccurrences(arr: number[]): boolean {
        const map = new Map<number, number>();
        for (const n of arr) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        const values = Array.from(map.values());

        return new Set<number>(values).size === values.length;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
