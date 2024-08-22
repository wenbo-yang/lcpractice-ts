xdescribe('leetcode 495: teemo attacking', () => {
    function findPoisonedDuration(timeSeries: number[], duration: number): number {
        if (timeSeries.length == 0) return 0;    
        let total = 0;
        for (let i = 1; i < timeSeries.length; ++ i)
          total += (timeSeries[i] > timeSeries[i - 1] + duration ? duration : timeSeries[i] - timeSeries[i - 1]);
        return total + duration;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
