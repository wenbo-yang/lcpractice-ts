xdescribe('leetcode 487: max consecutive ones if you can flip one zero', () => {
    function maxConsecutiveOnes(nums: number[]): number {
        let l = 0;
        let r = 1;
        let isLastZeroLengthOfOne = false;
        let prevOneCount = 0;
        let max = 0;
        while (r < nums.length) {
            if (nums[r] !== nums[l]) {
                if (nums[l] === 1) {
                    if (isLastZeroLengthOfOne) {
                        max = prevOneCount + r - l;
                        isLastZeroLengthOfOne = false;
                    }    
                    else {
                        max = r - l;
                    }

                    prevOneCount = r - l;

                }
                else {
                    isLastZeroLengthOfOne = (r - l) === 1;
                }

                l = r;
            }
            r++;              
        }
   
        let last = 0;
        if (isLastZeroLengthOfOne) {
            last = prevOneCount + nums[l] === 1 ? r - l : 0;
        }
        else {
            last = nums[l] === 1 ? r - l : 0;
        }

        return Math.max(max, last);

    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
