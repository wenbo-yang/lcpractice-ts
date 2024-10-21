xdescribe('leetcode 810: chalkboard xor', () => {
    function xorGame(nums: number[]): boolean {
        if (nums.length % 2 === 0) {
            return true;
        }
      
        let xorSum: number = 0;
        for (let num of nums) {
            xorSum ^= num;
        }
      
        return xorSum === 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
