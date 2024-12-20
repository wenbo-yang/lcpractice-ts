xdescribe('leetcode 1067: digit count in range', () => {
    function dfs(pos: number, count: number, isLeadingZero: boolean, isLimit: boolean, memo: number[][], digitsArray: number[], d: number): number {
        if (pos === 0) {
            return count;
        }
        if (!isLeadingZero && !isLimit && memo[pos][count] !== -1) {
            return memo[pos][count];
        }
        let upperBound = isLimit ? digitsArray[pos] : 9;
        let sum = 0;
        for (let i = 0; i <= upperBound; ++i) {
            if (i === 0 && isLeadingZero) {
                sum += dfs(pos - 1, count, isLeadingZero, isLimit && i === upperBound, memo, digitsArray, d);
            } else {
                sum += dfs(pos - 1, count + (i === d ? 1 : 0), false, isLimit && i === upperBound, memo, digitsArray, d);
            }
        }
        
        if (!isLeadingZero && !isLimit) {
          memo[pos][count] = sum;
        }
        return sum;
    }

    function digitsCount(d: number, low: number, high: number): number {
        const digitsArray: number[] = new Array(11);
        const memo: number[][] = Array.from(Array(11), () => new Array(11).fill(-1));
        
        return countUpTo(high, d, memo, digitsArray) - countUpTo(low - 1, d, memo, digitsArray);
    }
    
    function countUpTo(n: number, d: number, memo: number[][], digitsArray: number[]): number {
        memo.forEach(row => row.fill(-1));
        let length = 0;
        while (n > 0) {
            digitsArray[++length] = n % 10;
            n = Math.floor(n / 10);
        }
        return dfs(length, 0, true, true, memo, digitsArray, d);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
