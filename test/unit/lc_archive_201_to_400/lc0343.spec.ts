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
        const mem = new Map<number, number>();

        mem.set(2, 2);
        mem.set(3, 3);

        while (target <= Math.floor(n / 2)) {
            currentResult = Math.max(target * integerBreakHelper(n - target, mem), currentResult);
            target++;
        }

        return currentResult;
    };


    function integerBreakHelper(n: number, mem: Map<number, number>): number {
        if (mem.has(n)) {
            return mem.get(n) || 1;
        }

        let target = 2; 
        let currentResult = 0;
        while (target <= Math.floor(n / 2)) {
            currentResult = Math.max(target * integerBreakHelper(n - target, mem), currentResult)
            target++;
        }

        mem.set(n, currentResult);

        return mem.get(n) || currentResult;
    }

    it('test case 1 Input: 10, output 36', () => {
        expect(integerBreak(10)).toEqual(36);
    });
});

