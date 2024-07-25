xdescribe('leetcode 256: paint house', () => {
    function painHouse(costs: number[][]): number {
        // [[17,100,17],[16,5,16],[14,3,19]]
        //          17,  16        14
        //

        let r = 0,
            g = 0,
            b = 0;
        for (const cost of costs) {
            let _r = r,
                _g = g,
                _b = b;
            r = Math.min(_g, _b) + cost[0];
            g = Math.min(_r, _b) + cost[1];
            b = Math.min(_r, _g) + cost[2];
        }
        return Math.min(r, Math.min(g, b));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
