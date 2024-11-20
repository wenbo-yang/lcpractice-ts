xdescribe('leetcode 976: largest perimeter triangle', () => {
    function largestPerimeter(nums: number[]): number {
        const n = nums.length;
        nums.sort((a, b) => b - a);
      
        for (let i = 2; i < n; i++) {
            const sideA = nums[i - 2];
            const sideB = nums[i - 1];
            const sideC = nums[i];
          
            if (sideA < sideB + sideC) {
                return sideA + sideB + sideC;
            }
        }
      
        return 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
