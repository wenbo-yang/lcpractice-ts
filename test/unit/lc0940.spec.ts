xdescribe('leetcode 940: distinct subsequences', () => {
    function distinctSubseqII(s: string): number {
        const MODULO: number = 1e9 + 7; 
        const lastOccurrence = new Array<number>(26).fill(0); 

        for (const char of s) {
            const charIndex: number = char.charCodeAt(0) - 'a'.charCodeAt(0); 

            lastOccurrence[charIndex] = lastOccurrence.reduce((runningTotal, currentValue) => 
                (runningTotal + currentValue) % MODULO, 0) + 1;
        }

        return lastOccurrence.reduce((runningTotal, currentValue) => 
            (runningTotal + currentValue) % MODULO, 0);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
