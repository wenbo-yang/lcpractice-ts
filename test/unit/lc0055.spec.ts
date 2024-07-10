xdescribe('leetcode 55: jump game  ', () =>{
    function canJump(nums: number[]): boolean {
        let far:number = nums[0];
        for (let i = 0; i < nums.length; ++i) {
            if (i > far) {
                break;
            }
            
            far = Math.max(far, i + nums[i]);      
        }
    
        return far >= nums.length - 1;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {
    });
});
