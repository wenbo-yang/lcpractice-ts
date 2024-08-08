xdescribe('leetcode 338: description', () => {
    function countBits(n: number): number[] {
        const result: number[] = [0];

        for (let i = 1; i <= n; i++) {
            let count = 0;
            while (i !== 0) {
                if (((i >> 1) & 1) === 1) {
                    count++;
                }
            }
            result.push(count);
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});