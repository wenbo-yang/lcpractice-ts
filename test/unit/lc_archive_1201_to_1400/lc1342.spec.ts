xdescribe('leetcode 1342: number of steps to reduce a number to zero', () => {
    function numberOfSteps(num: number): number {
        let result = 0;
        while (num !== 0) {
            if (num % 2 === 0) {
                num = num / 2;
            }
            else {
                num = num - 1;
            }

            result++;
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
