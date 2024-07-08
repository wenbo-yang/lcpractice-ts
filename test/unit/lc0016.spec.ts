xdescribe('leetcode 16: 3Sum', () =>{
    function threeSumClosest(nums: number[], target: number): number {
        const sortedNums = nums.sort((a, b) => a - b);

        console.log(sortedNums);
        let retVal = Number.MIN_SAFE_INTEGER;
        let diff = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < sortedNums.length; i++) {
            const currentSum = sortedNums[i] + twoSumClosest(sortedNums, i, target - sortedNums[i]);
            if (currentSum === target) {
                retVal = currentSum;
                break;
            } 

            if (Math.abs(currentSum - target) < diff) {
                diff = Math.abs(currentSum - target);
                retVal = currentSum;
            } 
        }

        return retVal;
    };

    function twoSumClosest(sortedNums: number[], indexToAvoid: number, twoSumTarget: number) {
        let closest = Number.MAX_SAFE_INTEGER;
        let sum = 0;

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
            const currentDiff = Math.abs(twoSumTarget - currentSum);

            if (currentDiff > closest) {
                break;
            }
            else {
                closest = currentDiff;
            }

            sum = currentSum;

            if (sum === twoSumTarget) {
                sum = currentSum;
                return sum;
            }

            if (sum > twoSumTarget) {
                r--;
                continue;
            }
            
            if (sum < twoSumTarget) {
                l++
                continue;
            }
        }

        return sum;
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

    it('test case 4 Input: [4,0,5,-5,3,3,0,-4,-5], target = -2, Output: -2', () =>{
        const nums = [4,0,5,-5,3,3,0,-4,-5];
        const target = -2;

        const output = threeSumClosest(nums, target);

        expect(output).toEqual(-2);
    });

    it('test case 5 Input: [4,0,5,-5,3,3,0,-4,-5], target = -2, Output: -2', () =>{
        const nums = [4,0,5,-5,3,3,0,-4,-5];
        const target = -2;

        const output = threeSumClosest(nums, target);

        expect(output).toEqual(-2);
    });

    it('test case 6 Input: large array target = 255, Output: 255', () =>{
        const nums = [-43,57,-71,47,3,30,-85,6,60,-59,0,-46,-40,-73,53,68,-82,-54,88,73,20,-89,-22,39,55,-26,95,-87,-57,-86,28,-37,43,-27,-24,-88,-35,82,-3,39,-85,-46,37,45,-24,35,-49,-27,-96,89,87,-62,85,-44,64,78,14,59,-55,-10,0,98,50,-75,11,97,-72,85,-68,-76,44,-12,76,76,8,-75,-64,-57,29,-24,27,-3,-45,-87,48,10,-13,17,94,-85,11,-42,-98,89,97,-66,66,88,-89,90,-68,-62,-21,2,37,-15,-13,-24,-23,3,-58,-9,-71,0,37,-28,22,52,-34,24,-8,-20,29,-98,55,4,36,-3,-9,98,-26,17,82,23,56,54,53,51,-50,0,-15,-50,84,-90,90,72,-46,-96,-56,-76,-32,-8,-69,-32,-41,-56,69,-40,-25,-44,49,-62,36,-55,41,36,-60,90,37,13,87,66,-40,40,-35,-11,31,-45,-62,92,96,8,-4,-50,87,-17,-64,95,-89,68,-51,-40,-85,15,50,-15,0,-67,-55,45,11,-80,-45,-10,-8,90,-23,-41,80,19,29,7];
        const target = 255;

        const output = threeSumClosest(nums, target);

        expect(output).toEqual(255);
    });
    
});


