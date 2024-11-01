xdescribe('leetcode 902: number at most N given digit', () => {
    function atMostNGivenDigitSet(digits: string[], n: number): number {
        const mem = new Array<Array<number>>(12).fill([]).map(r => [-1, -1]);
        const digitSet = new Set<number>(digits.map(d => Number(d)));
        const digitsArray: number[] = new Array(12).fill(-1);
        let numSize: number = 0; // Length of the number 'n'
        while (n) {
            digitsArray[++numSize] = n % 10;
            n = Math.floor(n / 10);
        }

        return dfs(numSize, 1, true, mem, digitSet, digitsArray);
    };

    function dfs(position: number, isLeadingZero: number, isLimited: boolean, mem: number[][], digitSet: Set<number>, digitsArray: number[]): number {
        if (position === 0) {
            return isLeadingZero ^ 1;
        }
      
        if (!isLimited && isLeadingZero === 0 && mem[position][isLeadingZero] !== -1) {
            return mem[position][isLeadingZero];
        }
      
        let upperBound: number = isLimited ? digitsArray[position] : 9; 
        let count: number = 0; 
      
        for (let digit = 0; digit <= upperBound; digit++) {
            if (digit === 0 && isLeadingZero) {
                count += dfs(position - 1, isLeadingZero, isLimited && digit === upperBound, mem, digitSet, digitsArray);
            }
            else if (digitSet.has(digit)) {
                count += dfs(position - 1, 0, isLimited && digit === upperBound, mem, digitSet, digitsArray);
            }
        }
      
        if (!isLimited && isLeadingZero === 0) {
            mem[position][isLeadingZero] = count;
        }
      
        return count; 
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

