xdescribe('leetcode 1232: check if it is a straight line', () => {
    function checkStraightLine(coordinates: number[][]): boolean {
        if (coordinates.length === 2) {
            return true;
        }
        
        const a = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
        const b = coordinates[0][1] - a * coordinates[0][0];

        for (let i = 2; i < coordinates.length; i++) {
            if (Math.abs(coordinates[i][1] - a * coordinates[i][0] + b) > Number.EPSILON) {
                return false;
            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
