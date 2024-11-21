xdescribe('leetcode 948: bag of tokens', () => {
    function bagOfTokensScore(tokens: number[], power: number): number {
        tokens.sort((a,b) => a - b);
        let left = 0;
        let right = tokens.length - 1;
      
        let maxScore = 0;
        let currentScore = 0;
      
        while (left <= right) {
            if (power >= tokens[left]) {
                power -= tokens[left];  
                left += 1;  
                currentScore += 1;  
                maxScore = Math.max(maxScore, currentScore);  
            } else if (currentScore > 0) {
                power += tokens[right];  
                right -= 1;  
                currentScore -= 1;  
            } else {
                break;
            }
        }
      
        return maxScore;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
