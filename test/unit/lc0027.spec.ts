xdescribe('leetcode 27: remove element', () =>{
    function removeElement(nums: number[], val: number): number {
        let r = nums.length - 1;
        let l = 0;
        
        while (l <= r ) {
            if (nums[l] === val) {
                nums[l] = nums[r];
                r--;
            }
            else {
                l++;
            }
        }

        return r + 1;
    };


    it('test case 1 input [3,2,2,3], val = 3, nums = [2, 2], output = 2', () => {
        const nums = [3,2,2,3];
        const val = 3;
        const output = removeElement(nums, 3);

        expect(output).toEqual(2);
        expect(nums[0]).toEqual(2);
        expect(nums[1]).toEqual(2);
    });

});