xdescribe('leetcode 1250: check if it is a good array', () => {
    function gcd(a: number, b: number): number {
        if (b === 0) return a;
        return gcd(b, a % b);
      }
    
    function isGoodArray(nums: number[]): boolean {
        let greatestCommonDivisor: number = 0; 
  
        for (let number of nums) {
          greatestCommonDivisor = gcd(greatestCommonDivisor, number);
        }
        
        return greatestCommonDivisor === 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
