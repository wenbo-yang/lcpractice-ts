xdescribe('leetcode 1377: frog position after T seconds', () => {
    function frogPosition(n: number, edges: number[][], t: number, target: number): number {
        const graph: number[][] = Array.from({ length: n + 1 }, () => []);
        for (const [from, to] of edges) {
            graph[from].push(to);
            graph[to].push(from);
        }

        const queue: number[][] = [[1, 1]];
        const visited: boolean[] = Array.from({ length: n + 1 }, () => false);
        visited[1] = true;

        for (; queue.length > 0 && t >= 0; --t) {
            for (let nodesAtCurrentLevel = queue.length; nodesAtCurrentLevel > 0; --nodesAtCurrentLevel) {
                const [currentVertex, probability] = queue.shift()!;
                const unvisitedChildrenCount = graph[currentVertex].filter(v => !visited[v]).length;
            
                if (currentVertex === target) {
                    return (unvisitedChildrenCount === 0 || t === 0) ? probability : 0;
                }
                for (const adjacentVertex of graph[currentVertex]) {
                    if (!visited[adjacentVertex]) {
                        visited[adjacentVertex] = true;
                        queue.push([adjacentVertex, probability / unvisitedChildrenCount]);
                    }
                }
            }
        }

        return 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
