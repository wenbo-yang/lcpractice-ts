xdescribe('leetcode 621: task scheduler', () => {
    function leastInterval(tasks: string[], n: number): number {
        // greedy //
        const cnt: number[] = new Array<number>(26);
        let x = 0;
        for (const c of tasks) {
            cnt[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
            x = Math.max(x, cnt[c.charCodeAt(0) - 'A'.charCodeAt(0)]);
        }
        let s = 0;
        for (let v of cnt) {
            s = (v === x) ? s + 1 : s;
        }
        return Math.max(tasks.length, (x - 1) * (n + 1) + s);
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
