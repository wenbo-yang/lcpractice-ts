xdescribe('leetcode 973: k closest points to origin', () => {
    function kClosest(points: number[][], k: number): number[][] {        
        const compareDistance = (pointA: number[], pointB: number[]) => {
            const distanceA = pointA[0] ** 2 + pointA[1] ** 2;
            const distanceB = pointB[0] ** 2 + pointB[1] ** 2;
            return distanceA - distanceB;
        };

        const sortedPoints = points.sort(compareDistance);
        return sortedPoints.slice(0, k);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
