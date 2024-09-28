xdescribe('leetcode 673: longest increasing subsequence', () => {
    function findNumberOfLIS(nums: number[]): number {
        const allIncrSubsequences: number[][] = [[nums[0]]];
        
        for (let i = 1; i < nums.length; i++) {
            for(let j = 0; j < allIncrSubsequences.length; j++) {
                const targetSequence = allIncrSubsequences[j];
                if (targetSequence[targetSequence.length - 1] < nums[i]) {
                    targetSequence.push(nums[i]);
                }
                else {
                    const newSequence = Array.from(targetSequence);
                    while(newSequence.length > 0 && newSequence[newSequence.length - 1] >= nums[i]) {
                        newSequence.pop();
                    }
                    newSequence.push(nums[i]);
                    allIncrSubsequences.push(newSequence);
                }
            }
        }

        const max = allIncrSubsequences.sort((a, b) => b.length - a.length)[0].length;

        return allIncrSubsequences.filter(s => s.length === max).length; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
