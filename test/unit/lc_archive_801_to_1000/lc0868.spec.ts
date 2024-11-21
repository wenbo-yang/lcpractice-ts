xdescribe('leetcode 868: binary gap', () => {
    function binaryGap(n: number): number {
        const binaryString = n.toString(2).split('');

        let l = binaryString.findIndex(n => n === '1'); 
        let r = l + 1;
        let max = 0;

        while(r < binaryString.length) {
            if (binaryString[r] === '1') {
                max = Math.max(max, r - l);
                l = r;
            }

            r++;
        }   

        return max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
