xdescribe('leetcode 667: beautiful arrangement II', () => {
    function constructArray(n: number, k: number): number[] {
        // [1, 2, 3, 4] k = 1
        // [1, 2, 4, 3] k = 3 // -1, -2, 1
        // [1, 4, 3, 2] k = 2 // -3, 1, 1;
        // [1, 4, 2, 3] k = 3 // -3, 2, -1;

        let l = 1;
        let r = n;
        const ans = new Array(n);
        for (let i = 0; i < k; ++i) {
            ans[i] = i % 2 == 0 ? l++ : r--;
        }
        for (let i = k; i < n; ++i) {
            ans[i] = k % 2 == 0 ? r-- : l++;
        }
        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
