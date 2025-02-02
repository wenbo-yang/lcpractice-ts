xdescribe('leetcode 1340: jump game V', () => {
    function maxJumps(arr: number[], d: number): number {
        const n: number = arr.length;
        const indices: number[] = Array.from({ length: n }, (_, i) => i);

        indices.sort((a, b) => arr[a] - arr[b]);

        const dp: number[] = new Array(n).fill(1);

        indices.forEach((index) => {
            for (let left = index - 1; left >= 0; --left) {
                if (index - left > d || arr[left] >= arr[index]) {
                    break;
                }
                dp[index] = Math.max(dp[index], 1 + dp[left]);
            }
            for (let right = index + 1; right < n; ++right) {
                if (right - index > d || arr[right] >= arr[index]) {
                    break;
                }
                dp[index] = Math.max(dp[index], 1 + dp[right]);
            }
        });

        return Math.max(...dp);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
