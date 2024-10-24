xdescribe('leetcode 836: rect overlap', () => {
    function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
        const [leftX1, bottomY1, rightX1, topY1] = rec1;
        const [leftX2, bottomY2, rightX2, topY2] = rec2;
    
        const isSeparateHorizontally = leftX2 >= rightX1 || rightX2 <= leftX1;
        const isSeparateVertically = bottomY2 >= topY1 || topY2 <= bottomY1;
    
        return !(isSeparateHorizontally || isSeparateVertically);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
