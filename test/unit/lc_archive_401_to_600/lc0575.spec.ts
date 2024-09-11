xdescribe('leetcode 575: distribute candies', () => {
    function distributeCandies(candyType: number[]): number {
        const typesSet = new Set<number>();
        candyType.forEach(c => typesSet.add(c));
        const half = Math.floor(candyType.length / 2)
        return typesSet.size > half ? half : typesSet.size;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
