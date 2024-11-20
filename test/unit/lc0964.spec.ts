xdescribe('leetcode 964: Least Operators to Express Number', () => {
    function leastOpsExpressTarget(x: number, target: number): number {
        const numOperationsCache: Map<number, number> = new Map();
        return dfs(target, x, numOperationsCache);
    };

    const dfs = (currentTarget: number, x:number, numOperationsCache: Map<number, number>): number => {
        if (x > currentTarget) {
            return Math.min(currentTarget * 2 - 1, (x - currentTarget) * 2);
        }
        if (numOperationsCache.has(currentTarget)) {
            return numOperationsCache.get(currentTarget)!;
        }
        let powerIndex = 2;
        let poweredX = x * x;
        while (poweredX < currentTarget) {
            poweredX *= x;
            powerIndex++;
        }
        let minimumOperations = powerIndex - 1 + dfs(currentTarget - Math.floor(poweredX / x), x, numOperationsCache);
        if (poweredX - currentTarget < currentTarget) {
            minimumOperations = Math.min(minimumOperations, powerIndex + dfs(poweredX - currentTarget, x, numOperationsCache));
        }
        numOperationsCache.set(currentTarget, minimumOperations);
        return minimumOperations;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
