xdescribe('leetcode 1014: best sightseeing pair', () => {
    function maxScoreSightseeingPair(values: number[]): number {
        let maxScore = 0;
        let maxValueWithIndex = values[0];
    
        for (let currentIndex = 1; currentIndex < values.length; ++currentIndex) {
            maxScore = Math.max(maxScore, values[currentIndex] - currentIndex + maxValueWithIndex);  
            maxValueWithIndex = Math.max(maxValueWithIndex, values[currentIndex] + currentIndex);
        }
    
        return maxScore;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
