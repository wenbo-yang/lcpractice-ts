xdescribe('leetcode 1259: hand shakes that do not cross ', () => {
    function numberOfWays(numPeople: number): number {
        const modulo = 10 ** 9 + 7; 
        const dp: number[] = Array(numPeople + 1).fill(0); 
      
        const findWays = (peopleLeft: number): number => {
            if (peopleLeft < 2) {
                return 1;
            }
          
            if (dp[peopleLeft] !== 0) {
                return dp[peopleLeft];
            }
          
            for (let left = 0; left < peopleLeft; left += 2) {
                const right = peopleLeft - left - 2;
                dp[peopleLeft] += Number((BigInt(findWays(left)) * BigInt(findWays(right))) % BigInt(modulo));
                dp[peopleLeft] %= modulo;
            }
          
            return dp[peopleLeft];
        };
      
        return findWays(numPeople);
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
