xdescribe('leetcode 1247: min swaps to make strings equal', () => {
    function minimumSwap(s1: string, s2: string): number {
        const s1Count = new Array<number>(26);
        const s2Count = new Array<number>(26);
        s1.split('').forEach(c => s1Count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);
        s2.split('').forEach(c => s2Count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);

        for(let i = 0; i < s1Count.length; i++) {
            if ((s1Count[i] + s2Count[i]) % 2 !== 0) {
                return -1;
            }
        }

        let countXY = 0, 
        countYX = 0; 

        for (let i = 0; i < s1.length; ++i) {
            const charS1 = s1[i],
                  charS2 = s2[i];
          
            if (charS1 === 'x' && charS2 === 'y') {
                ++countXY; // Increase count for 'xy' pair
            }
            if (charS1 === 'y' && charS2 === 'x') {
                ++countYX; // Increase count for 'yx' pair
            }
        }
      
        return Math.floor(countXY / 2) + Math.floor(countYX / 2) + (countXY % 2) + (countYX % 2);  
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
