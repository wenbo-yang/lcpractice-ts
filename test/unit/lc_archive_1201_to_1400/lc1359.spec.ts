xdescribe('leetcode 1359: count all valid pick up and delivery options', () => {
    function countOrders(n: number): number {
        const MOD = 1e9 + 7;
        let factorial: bigint = BigInt(1);
        for (let i = 2; i <= n; i++) {
            factorial = (factorial * BigInt(i) * BigInt(2 * i - 1)) % BigInt(MOD);
        }

        return Number(factorial);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
