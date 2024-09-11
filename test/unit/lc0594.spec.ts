xdescribe('leetcode 594: spec', () => {
    function findLHS(nums: number[]): number {
        nums.sort((a,b) => a - b);

        let result = 0;
        let l = 0; 
        let r = 0; 
        let firstR = -1;
        while (r < nums.length) {
            if (nums[l] === nums[r]) {
                r++;
            }
            else if (nums[l] !== nums[r]) {
                if (nums[l] === nums[r] - 1) {
                    firstR = r;
                }
                else {
                    if (firstR !== -1) {
                        result = Math.max(result, r - l);
                        l = firstR;
                    }
                    else {
                        l = r;
                    }
                
                    firstR = -1
                }
            }
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
