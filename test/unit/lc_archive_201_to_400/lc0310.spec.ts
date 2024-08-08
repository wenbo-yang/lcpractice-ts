import { Queue } from "../commonLibs";

xdescribe('leetcode 310: description', () => {
    function findMinHeightTrees(n: number, edges: number[][]): number[] {
        if (n === 1) {
            return [0];
        }

        const g = new Array<Array<number>>(n).fill([]);
        
        const degree = new Array<number>(n);
        for (const e of edges) {
            let a = e[0], b = e[1];
            g[a].push(b);
            g[b].push(a);
            ++degree[a];
            ++degree[b];
        }

        const queue = new Queue<number>();
        for (let i = 0; i < n; ++i) {
            if (degree[i] == 1) {
                queue.enque(i);
            }
        }
        
        let ans: number[] = [];
        while (queue.length !== 0) {
            ans = [];
            for (let i = queue.length; i > 0; i--) {
                let a = queue.deque() || -1;
                ans.push(a);
                for (const b of g[a]) {
                    if (--degree[b] == 1) {
                        queue.enque(b);
                    }
                }
            }
        }
        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
