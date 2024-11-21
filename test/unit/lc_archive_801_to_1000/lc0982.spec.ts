xdescribe('leetcode 982: triples with bitwise and equal to zero', () => {
    function countTriplets(nums: number[]): number {
        const maxNum = Math.max(...nums);
        const count: number[] = Array(maxNum + 1).fill(0);

        for (const x of nums) {
            for (const y of nums) {
                count[x & y]++;
            }
        }

        let tripletCount = 0;

        for (let xy = 0; xy <= maxNum; ++xy) {
            for (const z of nums) {
                if ((xy & z) === 0) {
                    tripletCount += count[xy];
                }
            }
        }

        return tripletCount;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
