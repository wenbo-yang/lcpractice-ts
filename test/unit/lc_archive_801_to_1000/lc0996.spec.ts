xdescribe('leetcode 996: number of squareful arrays', () => {
    function numSquarefulPerms(nums: number[]): number {
        const length: number = nums.length;
        const dp: number[][] = Array.from({ length: 1 << length }, () => new Array<number>(length).fill(0)); 
    
        for (let i = 0; i < (1 << length); ++i) for (let j = 0; j < length; ++j) dp[i][j] = 0;
    
        for (let j = 0; j < length; ++j) {
            dp[1 << j][j] = 1;
        }
        for (let i = 0; i < (1 << length); ++i) {
            for (let j = 0; j < length; ++j) {
                if ((i >> j) & 1) {
                    for (let k = 0; k < length; ++k) {
                        if (((i >> k) & 1) && k !== j) {
                            const sum: number = nums[j] + nums[k]; 
                            const sqrtSum: number = Math.sqrt(sum);
                        
                            if (sqrtSum * sqrtSum === sum) {
                                dp[i][j] += dp[i ^ (1 << j)][k];
                            }
                        }
                    }
                }
            }
        }
    
        let totalPerms: number = 0;
        for (let j = 0; j < length; ++j) {
            totalPerms += dp[(1 << length) - 1][j];
        }
    
        const counts: { [key: number]: number; } = {};
        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }
    
        const factorials: number[] = [1];
        for (let i = 1; i <= 12; ++i) {
            factorials[i] = factorials[i - 1] * i;
        }
    
        for (const key in counts) {
            totalPerms /= factorials[counts[key]];
        }
    
        return totalPerms; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
