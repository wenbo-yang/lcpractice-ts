xdescribe('leetcode 960: deleted columns to make sorted', () => {
    function minDeletionSize(strs: string[]): number {
        const columnCount = strs[0].length;
        const dp: number[] = new Array(columnCount).fill(1);
        let maxLength = 1;
        for (let current = 1; current < columnCount; ++current) {
            for (let previous = 0; previous < current; ++previous) {
              
                if (isNonDecreasing(current, previous, strs)) {
                    dp[current] = Math.max(dp[current], dp[previous] + 1);
                }
            }
            maxLength = Math.max(maxLength, dp[current]);
        }
      
        return columnCount - maxLength;
    }
    
    function isNonDecreasing(current: number, previous: number, strs: string[]): boolean {
        for (let s of strs) {
            if (s[current] < s[previous]) {
                return false;
            }
        }
      
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
