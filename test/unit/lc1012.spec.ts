xdescribe('leetcode 1012: numbers iwth repeated digits', () => {
    function numDupDigitsAtMostN(n: number): number {
        return n - countUniqueDigitNumbers(n);
    };

    function countUniqueDigitNumbers(n: number): number {
        const digits: number[] = [];
        while (n > 0) {
            digits.push(n % 10);
            n = Math.floor(n / 10);
        }
        digits.reverse();
    
        const dp = Array.from({ length: digits.length }, () => Array(1 << 10).fill(-1));
        return searchUniqueNumbers(0, 0, true, true, digits, dp);
    }

    const searchUniqueNumbers = (pos: number, mask: number, isLeadingZero: boolean, isLimit: boolean, digits: number[], dp: number[][]): number => {
        if (pos === digits.length) {
            return isLeadingZero ? 0 : 1;
        }
        if (!isLeadingZero && !isLimit && dp[pos][mask] !== -1) {
            return dp[pos][mask];
        }

        const upperBound = isLimit ? digits[pos] : 9;
        let count = 0;

        for (let digit = 0; digit <= upperBound; ++digit) {
            if ((mask >> digit) & 1) {
                continue;
            }

            let nextMask = isLeadingZero && digit === 0 ? mask : mask | (1 << digit);
            let nextLimit = isLimit && digit === upperBound;

            count += searchUniqueNumbers(pos + 1, nextMask, isLeadingZero && digit === 0, nextLimit, digits, dp);
        }

        if (!isLeadingZero && !isLimit) {
            dp[pos][mask] = count;
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
