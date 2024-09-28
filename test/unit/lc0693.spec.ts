xdescribe('leetcode 693: alternating bits', () => {
    function hasAlternatingBits(n: number): boolean {
        const upper = getMostSignificantBit(n);
        
        
        let lastBit = ((n >> 1) && 1) === 1 ? 1 : 0;
        n = n >> 1;

        for (let i = 0; i < upper - 1; i++) {
            let currBit = ((n >> 1) && 1);
            if (currBit === lastBit) {
                return false;
            }
            
            lastBit = currBit;
            n = n >> 1;
        }

        return true;
    };

    function getMostSignificantBit(n: number) {
        let b = 0;
        while (n !== 0) {
            n = n >> 1;
            b++;
        }

        return b;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


