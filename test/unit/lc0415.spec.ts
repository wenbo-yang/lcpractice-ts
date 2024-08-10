xdescribe('leetcode 415: description', () => {
    function addStrings(num1: string, num2: string): string {
        let carry = 0;
        const bigger = num1.length > num2.length ? num1 : num2;
        const smaller = num1.length <= num2.length ? num1 : num2;

        let l = 0;
        const result: string[] = []
        while (l < smaller.length) {
            const sum = Number(smaller[l]) + Number(bigger[l]) + carry;
            if (sum >= 10) {
                result.push((sum - 10).toString());
                carry = 1;
            }
            else {
                result.push(sum.toString());
                carry = 0;
            }
        }

        return result.reverse().join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});