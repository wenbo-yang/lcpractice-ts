xdescribe('leetcode 768: ', () => {
    function maxChunksToSorted(arr: number[]): number {
        const n = arr.length;
        let ans = 0;
        const maxL = new Array<number>(n).fill(0);  // l[i] := max(arr[0..i])
        const minR = new Array<number>(n).fill(0);  // r[i] := min(arr[i..n))

        for (let i = 0; i < n; ++i) {
            maxL[i] = i === 0 ? arr[i] : Math.max(arr[i], maxL[i - 1]);

        }
        
        for (let i = n - 1; i >= 0; --i) {
            minR[i] = i == n - 1 ? arr[i] : Math.min(arr[i], minR[i + 1]);
        }
        
        for (let i = 0; i + 1 < n; ++i) {
            if (maxL[i] <= minR[i + 1]) {
                ++ans;
            }
        }
        
        return ans + 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
