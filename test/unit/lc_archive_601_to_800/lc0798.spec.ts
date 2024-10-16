xdescribe('leetcode 798: smallest rotation', () => {
    function bestRotation(nums: number[]): number {
        const n: number = nums.length;
        let maxScore: number = -1;    
        let bestK: number = n;         
        let diffs: number[] = new Array(n).fill(0); 
    
        for (let i = 0; i < n; ++i) {
            let left: number = (i + 1) % n;             
            let right: number = (n + i + 1 - nums[i]) % n; 
          
            diffs[left]++;   
            diffs[right]--;  
            if (left > right) {  
                diffs[0]++;  
            }
        }
    
        let score: number = 0; 
        for (let k = 0; k < n; ++k) {
            score += diffs[k];  
          
            if (score > maxScore) {  
                maxScore = score;
                bestK = k;
            }
        }
    
        return bestK;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
