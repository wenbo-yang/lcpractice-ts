xdescribe('leetcode 611: description', () => {
    function triangleNumber(nums: number[]): number {
        nums.sort((a,b) => a - b);
        let result = 0;
        for (let i = 0; i < nums.length - 2; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const sum = nums[i] + nums[j];
                const ks = findKs(nums, j+1, sum);
                result += ks;
            }
        }

        return result;
    };


    function findKs(nums: number[], l: number, sum: number): number {
            
        let pivot = Math.floor((nums.length - 1 + l) / 2);

        while (pivot < nums.length && pivot > l) {
            if (nums[pivot] < sum && nums[pivot] + 1 >= sum) {
                break;
            }
            else if (nums[pivot] < sum){
                pivot = Math.floor((pivot + 1 + nums.length - 1) / 2)
            }
            else {
                pivot = Math.floor((l + pivot) / 2)
            }
        }

        return pivot - l + 1;

    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


