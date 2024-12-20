xdescribe('leetcode 1085: sum of digits in minimum number', () => {
    function sumOfDigits(nums: number[]): number {
        const min = Math.min(...nums);
        const sum = min.toString().split('').map( s => Number(s)).reduce((a,b) => a + b);

        return sum % 2 === 0 ? 1 : 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
