xdescribe('leetcode 1121: divide array into increasing sequences', () => {
    function canDivideIntoSubsequences(nums: number[], k: number) {
        let currentStreak = 0;
        let previousValue = 0;
        for (let currentValue of nums) {
            if (previousValue === currentValue) {
                currentStreak++;
            } else {
                currentStreak = 1;
            }
    
            if (currentStreak * k > nums.length) {
                return false;
            }
            previousValue = currentValue;
        }
    
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
