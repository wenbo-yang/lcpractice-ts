xdescribe('leetcode 747: largest number at least twice of others', () => {
    function dominantIndex(nums: number[]): number {
        if (!nums || nums.length < 2) {
            return -1;
        }

        let biggest = Number.MIN_SAFE_INTEGER;
        let secondBiggest = Number.MIN_SAFE_INTEGER;
        let biggestIndex = -1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= biggest) {
                secondBiggest = biggest;
                biggest = nums[i];
            }
            else if (nums[i] >= secondBiggest) {
                secondBiggest = nums[i];
            }
        }

        return secondBiggest + secondBiggest < biggest ? biggestIndex : -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
