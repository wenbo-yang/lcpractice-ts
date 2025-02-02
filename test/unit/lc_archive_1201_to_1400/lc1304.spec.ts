xdescribe('leetcode 1304: n unique integers sum up to zero', () => {
    function sumZero(n: number): number[] {
        let max = Math.floor(n / 2)
        const  positive: number[] = [];
         
        for (let i = 1; i <= max; i++ ) {
            positive.push(i);
        }
        
        const negative = positive.map(p => -1 * p);

        return n % 2 === 0 ? negative.concat(positive) : negative.concat([0]).concat(positive);
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
