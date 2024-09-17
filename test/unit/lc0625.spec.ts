xdescribe('leetcode 625: min factorization', () => {
    function minFactorization(n: number): number {
        if (n < 2) {
            return n;
        }

        let result = 0; 
        let mul = 1;

        for (let i = 9; i >= 2; --i) {
            if (n % i == 0) {
                while (n % i == 0) {
                    n /= i;
                    result = mul * i + result;
                    mul *= 10;
                }
            }
        }

        return n < 2 && result <= Number.MAX_SAFE_INTEGER ? result : 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
