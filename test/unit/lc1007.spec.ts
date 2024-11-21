xdescribe('leetcode 1007: min domino rotations for equal row', () => {
    function minDominoRotations(tops: number[], bottoms: number[]): number {
        const length = tops.length;
        const rotations = Math.min(
            calculateRotationsForNumber(tops[0], tops, bottoms),
            calculateRotationsForNumber(bottoms[0], tops, bottoms)
        );

        return rotations > length ? -1 : rotations;
    };

    function calculateRotationsForNumber(targetNumber: number, tops: number[], bottoms: number[]): number {
        let topCount = 0;      
        let bottomCount = 0;   

        for (let i = 0; i < tops.length; ++i) {
            if (tops[i] !== targetNumber && bottoms[i] !== targetNumber) {
                return tops.length + 1;
            }
            if (tops[i] === targetNumber) {
                topCount++;
            }
            if (bottoms[i] === targetNumber) {
                bottomCount++;
            }
        }
        return tops.length - Math.max(topCount, bottomCount);
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
