xdescribe('leetcode 829: consecutive nums sum', () => {
    function consecutiveNumbersSum(n: number): number {
        n *= 2;
  
        let countOfWays: number = 0;
    
        for (let k = 1; k * (k + 1) <= n; ++k) {
            if (n % k === 0) {
                if ((n / k + 1 - k) % 2 === 0) {
                    ++countOfWays;
                }
            }
        }
        return countOfWays;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
