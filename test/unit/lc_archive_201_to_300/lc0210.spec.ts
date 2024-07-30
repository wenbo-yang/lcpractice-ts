xdescribe('leetcode 210: finish courses', () => {
    function findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const graph: number[][] = new Array<number[]>(numCourses).fill([]);

        for (const pair of prerequisites) {
            graph[pair[1]].push(pair[0]);
        }

        const visitingState = new Array<number>(numCourses).fill(0); // 0 unknown, 1 visiting 2 visited
        const result: number[] = [];

        for (let i = 0; i < numCourses; ++i)
            if (dfs(i, graph, visitingState, result)) {
                return [];
            }

        return result.reverse();
    }

    function dfs(curr: number, graph: number[][], visitingState: number[], result: number[]) {
        if (visitingState[curr] == 1) return true;
        if (visitingState[curr] == 2) return false;

        visitingState[curr] = 1;

        for (const t of graph[curr]) if (dfs(t, graph, visitingState, result)) return true;

        visitingState[curr] = 2;
        result.push(curr);

        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
