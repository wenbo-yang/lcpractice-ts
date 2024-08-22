xdescribe('leetcode 492: optimal rect', () => {
    function constructRectangle(area: number): number[] {
        for (let i = Math.sqrt(area); i >= 1; --i) {
            if (area % i == 0) {
                return [area / i, i]
            }; 
        }
        
        return [0, 0];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
