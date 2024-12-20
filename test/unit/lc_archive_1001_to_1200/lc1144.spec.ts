xdescribe('leetcode 1144: decrease elements to make array zigzag', () => {
    function movesToMakeZigzag(nums: number[]): number {
        const minMoves: number[] = Array(2).fill(0);
        const length = nums.length;
    
        for (let pattern = 0; pattern < 2; ++pattern) {
            for (let index = pattern; index < length; index += 2) {
                let difference = 0; 
    
                if (index > 0) {
                    difference = Math.max(difference, nums[index] - nums[index - 1] + 1);
                }
                if (index < length - 1) {
                    difference = Math.max(difference, nums[index] - nums[index + 1] + 1);
                }
                minMoves[pattern] += difference;
            }
        }
        return Math.min(...minMoves);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
