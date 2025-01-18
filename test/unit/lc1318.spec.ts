xdescribe('leetcode 1318: minimum flops to make a or b euqal to c', () => {
    function minFlips(a: number, b: number, c: number): number {
        let counter = 0;
        let i = 1;

        let flips = 0;
        while (counter++ < 32){
            let cV = c & i; 
            let aV = a & i;
            let bV = b & i;
            i = i << 1;
            
            if (cV === 0) {
                if ((aV & bV) === 1) {
                    flips += 2;
                }
                else if ((aV | bV) === 1) {
                    flips += 1;
                }
            }
            else {
                if ((aV | bV) === 0) {
                    flips += 1;
                } 
            }
        }

        return flips;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
