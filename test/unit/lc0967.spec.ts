xdescribe('leetcode 967: numbers with same consecutive difference', () => {
    function numsSameConsecDiff(n: number, k: number): number[] {
        const result: number[] = [];
        for (let start = 1; start <= 9; ++start) {
            dfs(n - 1, k, start,  result); 
        }

        return result;
    };

    function dfs(n: number, k: number, current: number, result: number[]): void {
        if (n === 0) {
            result.push(current); 
            return; 
        }
        const lastDigit = current % 10; 
    
        if (lastDigit + k < 10) {
            dfs(n - 1, k, current * 10 + lastDigit + k, result); 
        }
      
        if (lastDigit - k >= 0 && k !== 0) {
            dfs(n - 1, k, current * 10 + lastDigit - k, result); 
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
