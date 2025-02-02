xdescribe('leetcode 1356: sort integers by the number of 1 bits', () => {
    function sortByBits(arr: number[]): number[] {
        const sortedCountMap = arr.map(n => [n, n.toString(2).split('').filter(s => s === '1').length]).sort((a, b) => a[1] - b[1]);
        return sortedCountMap.map(n => n[0]);
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
