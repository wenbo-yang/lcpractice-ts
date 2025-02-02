xdescribe('leetcode 1238: circular permuation in binary representation', () => {
    function circularPermutation(n: number, start: number): number[] {
        const permutation: number[] = [];

        for (let index = 0; index < (1 << n); ++index) {
            const grayCode = index ^ (index >> 1) ^ start;
            permutation.push(grayCode);
        }

        return permutation;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
