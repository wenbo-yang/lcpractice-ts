xdescribe('leetcode 666: path sum IV', () => {
    function pathSum(nums: number[]): number {
        let ans = [0];
        const mp = new Map<number, number>();
        for (const num of nums) {
            mp.set(num / 10, num % 10);
        }
        
        dfs(11, 0, mp, ans);
        
        return ans[0];
    }

    function dfs(node: number, t: number, mp: Map<number, number>, ans: number[]) {
        if (!mp.has(node)) {
            return;
        }
        t += mp.get(node) || 0;
        const d = node / 10, p = node % 10;
        let l = (d + 1) * 10 + (p * 2) - 1;
        let r = l + 1;
        if (!mp.has(l) && !mp.has(r)) {
            ans[0] += t;
            return;
        }
        dfs(l, t, mp, ans);
        dfs(r, t, mp, ans);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


