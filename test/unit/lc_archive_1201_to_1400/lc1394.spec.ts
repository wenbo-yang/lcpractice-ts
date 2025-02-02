xdescribe('leetcode 1394: find lucky integer in an array', () => {
    function findLucky(arr: number[]): number {
        const map = new Map<number, number>();
        arr.forEach(n => map.set(n, (map.get(n) || 0) + 1));

        let result = 0;

        Array.from(map.entries()).forEach(e => result += e[0] === e[1] ? 1 : 0);

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
