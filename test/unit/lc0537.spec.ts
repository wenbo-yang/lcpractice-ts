xdescribe('leetcode 537: description', () => {
    function complexNumberMultiply(num1: string, num2: string): string {
        const n1 = parseComplexNum(num1);
        const n2 = parseComplexNum(num2);

        let real = n1.real * n2.real - n1.complex * n2.complex;
        let complex = n1.real * n2.complex + n2.real * n1.complex;

        if (real === 0) {
            return complex.toString() + 'i';
        }

        if (complex === 0) {
            return real.toString();
        }

        return real.toString() + (complex > 0 ? '+' : '') + complex.toString() + 'i';
    }

    function parseComplexNum(num1: string): { real: number; complex: number } {
        if (num1.includes('+')) {
            const number = num1.split('+');
            return { real: Number(number[0]), complex: Number(number[1].replace('i', '')) };
        }

        if (num1.includes('i')) {
            return { real: 0, complex: Number(num1.replace('i', '')) };
        }

        if (!num1.includes('i')) {
            return { real: Number(num1), complex: 0 };
        }

        return { real: 0, complex: 0 };
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
