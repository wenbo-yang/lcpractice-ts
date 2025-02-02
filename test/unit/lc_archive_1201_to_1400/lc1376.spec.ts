xdescribe('leetcode 1376: time needed to inform all employee', () => {
    function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
        // construct a graph and then move
        let index = 0;
        const map = new Map<number, number[]>(new Array<number>(n).fill(0).map(m => [index++, []]));
        
        for (let i = 0; i < manager.length; i++) {
            if (manager[i] !== -1) {
                const details = map.set(manager[i], (map.get(manager[i]) || []).concat(i));
            }
        }

        const queue: number[][] = [];
        index = 0;
        queue.push((map.get(headID) || []).concat(headID));
        const visited = new Array<boolean>(n).fill(false);
        let time = 0;
        while (queue.length) {
            const top = queue.shift() || [];
            const self = top.pop()!;
            if (visited[self]) continue;
            time += informTime[self];
            visited[self] = true;
            
            for (const c of top) {
                queue.push((map.get(c) || []).concat(c));
            }
        }


        return time;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
