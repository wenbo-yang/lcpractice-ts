xdescribe('leetcode 634: find derangement array number', () => {
    function findDerangedArrayNumber(n: number): number {
        const mod = 1000000007;
        let a = 1; 
        let b = 0;

        for (let i = 2; i <= n; i++) {
            const c = (i - 1) * (a + b) % mod;
            a = b;
            b = c;
        }

        return b;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
