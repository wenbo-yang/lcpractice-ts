xdescribe('leetcode 1266: min time to visit all nodes', () => {
    function minTimeToVisitAllPoints(points: number[][]): number {
        let totalTime = 0;
  
        for (let i = 1; i < points.length; i++) {
            let horizontalDistance = Math.abs(points[i][0] - points[i - 1][0]);
            let verticalDistance = Math.abs(points[i][1] - points[i - 1][1]);
            totalTime += Math.max(horizontalDistance, verticalDistance);
        }
        return totalTime;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
