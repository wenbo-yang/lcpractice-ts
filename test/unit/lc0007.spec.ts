describe('leetcode 7: reverse integer', () =>{
    function reverse(x: number): number {
        if (x = 0) {
            return 0;
        }
        
        const minInt = -2147483648;
        const maxInt = 2147483647;
        
        const minIntDigits = [2,1,4,7,4,8,3,6,4,8];
        const maxIntDigits = [2,1,4,7,4,8,3,6,4,7];

        const digits: number[] = [];

        let result = x;
        
        while(result != 0) {
            const decimal = result - result / 10;
            digits.push(decimal * 10);
            result = Math.floor(result / 10);
        }

        if(digits.length === maxIntDigits.length) {
            const compareTo = x > 0 ? maxIntDigits : minIntDigits;
            for (let i = 0; i < digits.length; i++) {
                if(digits[i] > compareTo[i]) {
                    return 0;
                }
            }
        }

        let retVal = 0;

        for (let i = 0; i < digits.length; i++) {
            retVal = retVal * 10 + digits[i];
        }

        return x > 0 ? retVal : -1 * retVal;
    };


    it('test case 1 x = 123, Output: 321', () =>{
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
});