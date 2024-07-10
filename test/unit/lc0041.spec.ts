xdescribe('leetcode 41: find the first missing positive', () =>{
    function firstMissingPositive(nums: number[]): number {
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] <= 0) {
                nums[i] = Number.MAX_SAFE_INTEGER;
            }
        }
        
        for(let i = 0; i < nums.length; i++) {
            let x = nums[i];
            x = Math.abs(x);
            if (x >= 1 && x <= nums.length && nums[x - 1] > 0) {
                nums[x - 1] *= -1
            }
        }

        for(let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }

        return nums.length + 1;
    };


    it('test case 1 nums = [1,2,0], output 3 ', () => {
        const result = firstMissingPositive([1, 2, 0]);

        expect(result).toEqual(3);
    });
});
