xdescribe('leetcode 1155: number of dice rolls with target sum', () => {
    function numRollsToTarget(n: number, k: number, target: number): number {
        const waysToTarget = Array(target + 1).fill(0);
        waysToTarget[0] = 1; 
    
        const mod = 1e9 + 7;
    
        for (let currentDie = 1; currentDie <= n; ++currentDie) {
            const tempWays = Array(target + 1).fill(0);
            for (let currentTarget = 1; currentTarget <= Math.min(currentDie * k, target); ++currentTarget) {
                for (let faceValue = 1; faceValue <= Math.min(currentTarget, k); ++faceValue) {
                    tempWays[currentTarget] = (tempWays[currentTarget] + waysToTarget[currentTarget - faceValue]) % mod;
                }
            }
    
            waysToTarget.splice(0, target + 1, ...tempWays);
        }
    
        return waysToTarget[target];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
