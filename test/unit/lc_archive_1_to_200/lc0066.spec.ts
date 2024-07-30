xdescribe('leetcode 66: plus one', () => {
    function plusOne(digits: number[]): number[] {
        let carry = 0;
        let increment = 1;

        if (digits[digits.length - 1] + increment >= 10) {
            digits[digits.length - 1] = digits[digits.length - 1] + increment - 10;
            carry = 1;
        } else {
            digits[digits.length - 1] += increment;
        }

        for (let i = digits.length - 2; i >= 0; i--) {
            if (digits[i] + carry >= 10) {
                carry = 1;
                digits[i] = digits[i] - 10;
            } else {
                carry = 0;
            }
        }

        return carry > 0 ? [1, ...digits] : digits;
    }

    it('test case 1 digits = [1,2,3],, output [1,2,4] ', () => {
        const result = plusOne([1, 2, 3]);

        expect(result).toEqual([1, 2, 4]);
    });

    it('test case 2 digits = [9],, output [1, 0] ', () => {
        const result = plusOne([9]);

        expect(result).toEqual([1, 0]);
    });
});
