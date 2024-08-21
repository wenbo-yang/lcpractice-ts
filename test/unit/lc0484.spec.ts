xdescribe('leetcode 484: find permutation', () => {
    function findPermutation(s: string) {
        const n = s.length;
        const ans = new Array<number>(n + 1);
        for (let i = 0; i < ans.length; i++) {
            ans[i] = i + 1;
        }
        let i = 0;
        while (i < n) {
            let j = i;
            while (j < n && s.charAt(j) == 'D') {
                j++;
            }
            reverse(ans, i, j);
            i = Math.max(i + 1, j);
        }
        return ans;
    }

    function reverse(arr: number[], i: number, j: number) {
        for (; i < j; ++i, --j) {
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
