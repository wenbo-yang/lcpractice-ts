describe('leetcode 16: 3Sum', () =>{
    function threeSumClosest(nums: number[], target: number): number {
        const sortedNums = nums.sort();
        let retVal = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < sortedNums.length; i++) {
            const closest = sortedNums[i] + twoSumClosest(sortedNums, i, target - sortedNums[i]);
            console.log(closest);
            retVal = Math.abs(closest - target) > Math.abs(retVal - target) ? retVal : closest;
        }

        return retVal;
    };

    function twoSumClosest(sortedNums: number[], indexToAvoid: number, twoSumTarget: number) {
        let retVal = Number.MAX_SAFE_INTEGER;

        let l = 0;
        let r = sortedNums.length - 1;

        while (l < r) {
            
            if (l === indexToAvoid) {
                l++;
                continue;
            }
            if (r === indexToAvoid) {
                r--;
                continue;
            }

            
            const currentSum = sortedNums[l] + sortedNums[r];
            
            if (Math.abs(currentSum - twoSumTarget) < Math.abs(retVal - twoSumTarget)) {
                retVal = currentSum;
            }
            else {
                break;
            }

            if (currentSum > twoSumTarget) {
                r--;
                continue;
            }
            
            if (currentSum < twoSumTarget) {
                l++
            }

            if (currentSum === twoSumTarget) {
                return twoSumTarget;
            }
        }

        return retVal;
    }

    it('test case 1 Input: nums = [-1,2,1,-4], target = 1, Output: 2', () =>{
        const nums =  [-1,2,1,-4];
        const target = 1;

        const output = threeSumClosest(nums, target);
        expect(output).toEqual(2);
    });


    it('test case 2 Input: nums = [0,0,0], target = 1, Output: 0', () =>{
        const nums = [0,0,0];
        const target = 1;

        const output = threeSumClosest(nums, target);

        expect(output).toEqual(0);
    });

    it('test case 3 Input: nums = [1,1,1,0], target = 100, Output: 3', () =>{
        const nums = [1,1,1,0];
        const target = 100;

        const output = threeSumClosest(nums, target);

        expect(output).toEqual(3);
    });
});


