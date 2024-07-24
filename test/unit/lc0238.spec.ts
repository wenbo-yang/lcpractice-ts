xdescribe('leetcode 238: product array except itself', () => {
    function productExceptSelf(nums: number[]): number[] {
        const retVal: Array<number> = new Array(nums.length).fill(0);
        const l = new Array<number>(nums.length).fill(1);
        const r = new Array<number>(nums.length).fill(1);

        for (let i = 1; i < nums.length; ++i) {
            l[i] = l[i - 1] * nums[i - 1];
        }   
          
        for (let i = nums.length - 2; i >= 0; --i) {
            r[i] = r[i + 1] * nums[i + 1];
        }
              
        for (let i = 0; i < nums.length; ++i) {
            retVal[i] = l[i] * r[i];
        }
        
        return retVal;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
