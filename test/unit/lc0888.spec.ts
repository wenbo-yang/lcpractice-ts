xdescribe('leetcode 888: fiar candy swap', () => {
    function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
        const aCandies = aliceSizes.reduce((a,b) => a + b);
        const bCandies = bobSizes.reduce((a,b) => a + b);
        const target = (aCandies + bCandies) / 2;
        
        const aliceSet = new Set<number>(aliceSizes);
        const bobSet = new Set<number>(bobSizes);
        
        for(const c of aliceSet) {
            const whatBobShouldHave = target - (aCandies - c);
            if (bobSet.has(whatBobShouldHave)) {
                return [c, whatBobShouldHave];
            }
        }

        return [-1, -1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
