xdescribe('leetcode 1017: convert to base -2', () => {
    function baseNeg2(n: number): string {
        if (n === 0) {
            return '0';
        }
        let powerOfNegTwo = 1;
        const baseNegTwoDigits: string[] = [];
    
        while (n) {
            if (n % 2) {
                baseNegTwoDigits.push('1');
                n -= powerOfNegTwo;
            } else {
                baseNegTwoDigits.push('0');
            }
    
            powerOfNegTwo *= -1;
    
            n = Math.trunc(n / 2);
        }
    
        return baseNegTwoDigits.reverse().join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
