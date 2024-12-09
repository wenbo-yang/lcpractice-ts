xdescribe('leetcode 1103: distribute candies to people', () => {
    function distributeCandies(candies: number, numPeople: number): number[] {
        const distribution: number[] = new Array(numPeople).fill(0);
        let currentDistribution = 0;
    
        while (candies > 0) {
            const currentIndex = currentDistribution % numPeople;
            const candiesToGive = Math.min(candies, currentDistribution + 1);
            distribution[currentIndex] += candiesToGive;
            candies -= candiesToGive;
            currentDistribution++;
        }
      
        return distribution;
        
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
