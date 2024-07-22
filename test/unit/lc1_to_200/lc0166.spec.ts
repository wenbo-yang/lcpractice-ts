xdescribe('leetcode 166: fraction to decimal', () => {
    function fractionToDecimal(numerator: number, denominator: number): string {
        if (numerator < 0 && denominator < 0) {
            return fractionToDecimalHelper(numerator * -1, denominator * -1);
        }

        if (numerator < 0) {
            return '-' + fractionToDecimalHelper(numerator * -1, denominator);
        }

        if (denominator < 0) {
            return '-' + fractionToDecimalHelper(numerator, denominator - 1);
        }

        return fractionToDecimalHelper(numerator, denominator);
    }

    function fractionToDecimalHelper(numerator: number, denominator: number): string {
        const beforeDecimal = Math.floor(numerator / denominator);
        const remainder = numerator % denominator; // 16 % 12 => 4 0 / 12 = 3 => 4
        const afterDecimal = fractionRecurringHelper(remainder, denominator, 0);

        return beforeDecimal + (afterDecimal.length > 0 ? '.' + afterDecimal : '');
    }

    function fractionRecurringHelper(remainder: number, denominator: number, previousRemainder: number): string {
        if (remainder === 0) {
            return '';
        }

        const numberOfDigitsN = remainder.toString().split('').length;
        const numberOfDigitsD = denominator.toString().split('').length;
        const powerOf10 = numberOfDigitsD - numberOfDigitsN + 1;
        const numerator = remainder * Math.pow(10, powerOf10);

        const result = Math.floor(numerator / denominator);
        const newRemainder = numerator % denominator;

        if (newRemainder === 0) {
            return result.toString();
        }

        if (newRemainder === previousRemainder) {
            return `(${result})`;
        }

        return result + fractionRecurringHelper(newRemainder, denominator, remainder);
    }

    it('test case 1 Input: numerator = 1, denominator = 2, output 0.5 ', () => {
        expect(fractionToDecimal(1, 2)).toEqual('0.5');
    });

    it('test case 1 Input: numerator = 2, denominator = 1, output 2 ', () => {
        expect(fractionToDecimal(2, 1)).toEqual('2');
    });
});
