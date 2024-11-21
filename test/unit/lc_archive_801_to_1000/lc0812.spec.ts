xdescribe('leetcode 812: description', () => {
    function largestTriangleArea(points: number[][]): number {
        let largestArea: number = 0; // Initialize the variable to hold the largest triangle area
  
        // Triple nested loop to iterate over all possible combinations of three points
        points.forEach(point1 => {
            const x1 = point1[0], y1 = point1[1];
            points.forEach(point2 => {
                const x2 = point2[0], y2 = point2[1];
              
                points.forEach(point3 => {
                    const x3 = point3[0], y3 = point3[1];
                  
                    const vector1X = x2 - x1, vector1Y = y2 - y1;
                    const vector2X = x3 - x1, vector2Y = y3 - y1;
                  
                    const area = Math.abs(vector1X * vector2Y - vector2X * vector1Y) / 2.0;
                    largestArea = Math.max(largestArea, area);
                });
            });
        });
      
        // Return the largest area found
        return largestArea;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
