xdescribe('leetcode 1039: minimum score trianglulation of polygon', () => {
    function minScoreTriangulation(values: number[]): number {
        const size = values.length;
        const dp: number[][] = Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
    
        for (let length = 3; length <= size; ++length) {
            for (let start = 0; start + length - 1 < size; ++start) {
                const end = start + length - 1;
                dp[start][end] = Number.MAX_SAFE_INTEGER;
                for (let k = start + 1; k < end; ++k) {
                    dp[start][end] = Math.min(dp[start][end], dp[start][k] + dp[k][end] + values[start] * values[k] * values[end]);
                }
            }
        }
        return dp[0][size - 1];
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
