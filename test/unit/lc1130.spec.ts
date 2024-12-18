xdescribe('leetcode 1130: minimum cost tree from left values', () => {
    function mctFromLeafValues(arr: number[]): number {
        const length = arr.length;

        const dp: number[][] = new Array(length).fill(0).map(() => new Array(length).fill(0));
        const maxLeafValue: number[][] = new Array(length).fill(0).map(() => new Array(length).fill(0));

        for (let start = length - 1; start >= 0; --start) {
            maxLeafValue[start][start] = arr[start];
        
            for (let end = start + 1; end < length; ++end) {
                maxLeafValue[start][end] = Math.max(maxLeafValue[start][end - 1], arr[end]);
                dp[start][end] = Number.MAX_SAFE_INTEGER;
                
                for (let mid = start; mid < end; ++mid) {
                    dp[start][end] = Math.min(dp[start][end], dp[start][mid] + dp[mid + 1][end] + maxLeafValue[start][mid] * maxLeafValue[mid + 1][end]);
                }
            }
        }

        return dp[0][length - 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
