xdescribe('leetcode 18: 4sum', () =>{
    function fourSum(nums: number[], target: number): number[][] {
        throw new Error('Not implemented');
    };


    it('test case 1 Input: Input: nums = [1,0,-1,0,-2,2], target = 0, Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]', () =>{
        const nums = [1,0,-1,0,-2,2];
        const target = 0;
        const output = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]];

        const result = fourSum(nums, target);
        expect(result).toEqual(output);
    });
});


