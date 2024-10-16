xdescribe('leetcode 728: self divding numbers', () => {
    function selfDividingNumbers(left: number, right: number): number[] {
        const result: number[] = [];

        for (let i = left; i <= right; i++) {
            const array = i.toString().split('').map(d => Number(d));
            if (!array.includes(0) && array.find(a => i % a !== 0)) {
                result.push(i);
            }
        }

        return result;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
