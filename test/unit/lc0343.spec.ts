describe('leetcode 343: integer break', () => {
    function integerBreak(n: number): number {
        if (n === 2) {
            return 1;
        }

        if (n === 3) {
            return 2;
        }

        let target = 2; 
        let currentResult: number = 0;;
        while (target <= Math.floor(n / 2)) {
            currentResult = Math.max(target * integerBreakHelper(n - target), currentResult);
            target++;
        }

        return currentResult;
    };


    function integerBreakHelper(n: number): number {
        if (n <= 2) {
            return n;
        }

        let target = 2; 
        let currentResult = 0;
        while (target <= Math.floor(n / 2)) {
            currentResult = Math.max(target * integerBreakHelper(n - target), currentResult)
            target++;
        }

        return currentResult;
    }

    it('test case 1 Input: 10, output 36', () => {
        expect(integerBreak(10)).toEqual(36);
    });
});

