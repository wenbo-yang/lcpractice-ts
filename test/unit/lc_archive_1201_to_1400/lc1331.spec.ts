xdescribe('leetcode 1331: rank transform of an array', () => {
    function arrayRankTransform(arr: number[]): number[] {
        let index = 1;
        const sortedMap = new Map<number,number>(Array.from(new Set<number>(arr)).sort((a, b) => a - b).map(n => [n, index++]));
        return arr.map(n => (sortedMap.get(n)!));
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
