xdescribe('leetcode 7: reverse integer', () => {
    function reverse(x: number): number {
        if (x === 0) {
            return 0;
        }

        const minIntDigits = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
        const maxIntDigits = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];

        const digits: number[] = [];
        let result = x > 0 ? x : -1 * x;

        while (result !== 0) {
            const decimal = result / 10 - Math.floor(result / 10);
            digits.push(Math.round(decimal * 10));
            result = Math.floor(result / 10);
        }

        if (digits.length === maxIntDigits.length) {
            const compareTo = x > 0 ? maxIntDigits : minIntDigits;
            for (let i = 0; i < digits.length; i++) {
                if (digits[i] < compareTo[i]) {
                    break;
                }
                if (digits[i] > compareTo[i]) {
                    return 0;
                }
            }
        }

        let retVal = 0;

        for (let i = 0; i < digits.length; i++) {
            retVal = retVal * 10 + digits[i];
        }

        return x > 0 ? retVal : -1 * retVal;
    }

    function reverseToString(x: number): number {
        if (x === 0) {
            return 0;
        }

        const minInt = -2147483648;
        const maxInt = 2147483647;

        const s = x.toString();

        let result = x > 0 ? '' : '-';
        let startPoint = x > 0 ? 0 : 1;
        for (let i = s.length - 1; i >= startPoint; i--) {
            result += s.charAt(i);
        }

        const retVal = Number(result);

        return retVal > maxInt || retVal < minInt ? 0 : retVal;
    }

    it('test case 1 x = 123, Output: 321', () => {
        const result = reverse(123);
        expect(result).toEqual(321);
    });

    it('test case 2 Input: x = -123, output -321', () => {
        const result = reverse(-123);
        expect(result).toEqual(-321);
    });

    it('test case 3 Input: x = 120, output 21', () => {
        const result = reverse(120);
        expect(result).toEqual(21);
    });

    it('test case 4 Input: x = -2147483412, output -2143847412', () => {
        const result = reverse(-2147483412);
        expect(result).toEqual(-2143847412);
    });

    it('test case 5 x = 123, Output: 321', () => {
        const result = reverseToString(123);
        expect(result).toEqual(321);
    });

    it('test case 6 Input: x = -123, output -321', () => {
        const result = reverseToString(-123);
        expect(result).toEqual(-321);
    });

    it('test case 7 Input: x = 120, output 21', () => {
        const result = reverseToString(120);
        expect(result).toEqual(21);
    });

    it('test case 8 Input: x = -2147483412, output -2143847412', () => {
        const result = reverseToString(-2147483412);
        expect(result).toEqual(-2143847412);
    });
});
