xdescribe('leetcode 8: string to integer', () => {
    function myAtoi(s: string): number {
        const minInt = -2147483648;
        const maxInt = 2147483647;

        let index = removeLeadingWhiteSpace(s);
        let vector = 1;

        if (isPositive(s.charAt(index))) {
            index++;
        } else if (isNegative(s.charAt(index))) {
            vector = -1;
            index++;
        }

        let integer = 0;
        while (index < s.length) {
            if (isDigit(s.charAt(index))) {
                integer = integer * 10 + Number(s.charAt(index));
                index++;
            } else {
                break;
            }
        }

        integer *= vector;

        if (integer > maxInt) {
            integer = maxInt;
        }

        if (integer < minInt) {
            integer = minInt;
        }

        return integer;
    }

    function removeLeadingWhiteSpace(s: string): number {
        let index = 0;
        for (index = 0; index < s.length; index++) {
            if (s.charAt(index) !== ' ') {
                break;
            }
        }

        return index;
    }

    function isNegative(s: string): boolean {
        return s === '-';
    }

    function isPositive(s: string) {
        return s === '+';
    }

    function isDigit(s: string): boolean {
        return s === '0' || s === '1' || s === '2' || s === '3' || s === '4' || s === '5' || s === '6' || s === '7' || s === '8' || s === '9';
    }

    it('test case 1 Input: s = "42", Output: 42', () => {
        const output = myAtoi('42');
        expect(output).toEqual(42);
    });

    it('test case 2 Input: s = "-042", Output: -42', () => {
        const output = myAtoi('-042');
        expect(output).toEqual(-42);
    });

    it('test case 3 Input: s = "1337c0d3", Output: 1337', () => {
        const output = myAtoi('1337c0d3');
        expect(output).toEqual(1337);
    });

    it('test case 4 Input: s = "0-1", Output: 0', () => {
        const output = myAtoi('0-1');
        expect(output).toEqual(0);
    });

    it('test case 5 Input: s = "words and 987", Output: 0', () => {
        const output = myAtoi('words and 987');
        expect(output).toEqual(0);
    });

    it('test case 6 Input: s = "4193 with words", Output: 4193', () => {
        const output = myAtoi('4193 with words');
        expect(output).toEqual(4193);
    });

    it('test case 4 Input: s = "+1", Output: 1', () => {
        const output = myAtoi('+1');
        expect(output).toEqual(1);
    });
});
