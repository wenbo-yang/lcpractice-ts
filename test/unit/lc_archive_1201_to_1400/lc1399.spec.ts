xdescribe('leetcode 1399: count largest group', () => {
    function countLargestGroup(n: number): number {
        const set = new Set<number>();
        let v = 1;
        Array<number>(n).fill(0).map(n => v++).forEach(n => set.add(n.toString().split('').map(c => Number(c)).reduce((a,b) => a + b)));

        return set.size;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
