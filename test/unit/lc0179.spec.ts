describe('leetcode 179: largest number', () => {
    function largestNumber(nums: number[]): string {
        const stringArray = nums
            .map((n) => n.toString())
            .sort((a, b) => {
                if (a + b < b + a) {
                    return 1;
                }
                if (a + b > b + a) {
                    return -1;
                }

                return 0;
            });

        return stringArray.join('');
    }

    it('test case 1 Input: [10, 2], output 210 ', () => {
        expect(largestNumber([10, 2])).toEqual('210');
    });

    it('test case 2 Input: [3,30,34,5,9], output 9534330 ', () => {
        expect(largestNumber([3, 30, 34, 5, 9])).toEqual('9534330');
    });
});
