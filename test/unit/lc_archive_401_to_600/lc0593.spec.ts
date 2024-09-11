xdescribe('leetcode 593: valid square', () => {
    function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
        // any pair has to equal to the other pair;
        return areEqualDistance(p1,p2, p3,p4) && areEqualDistance(p1, p3, p2, p4);

    };

    function areEqualDistance(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
        return ((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1])) === 
               ((p3[0] - p4[0]) * (p3[0] - p4[0]) + (p3[1] - p4[1]) * (p3[1] - p4[1])); 
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


