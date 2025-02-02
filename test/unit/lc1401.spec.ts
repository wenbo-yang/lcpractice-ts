xdescribe('leetcode 1401: circle and rectangle overlapping', () => {
    function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean {
        const deltaX = calculateMinDistance(x1, x2, xCenter);
        const deltaY = calculateMinDistance(y1, y2, yCenter);
        
        return deltaX * deltaX + deltaY * deltaY <= radius * radius;
    };


    function calculateMinDistance(lesserCoordinate: number, greaterCoordinate: number, pointCoordinate: number): number {
        if (pointCoordinate >= lesserCoordinate && pointCoordinate <= greaterCoordinate) {
            return 0;
        }
        if (pointCoordinate < lesserCoordinate) {
            return lesserCoordinate - pointCoordinate;
        }
        return pointCoordinate - greaterCoordinate;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
