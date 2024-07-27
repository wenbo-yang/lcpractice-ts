xdescribe('leetcode 261: description', () => {
    function validTree(n: number, edges: number[][]): boolean {
        // 
        //      0
        //   1  - 2 
        // | |    |
        //    -  - 3
        // 4

        const map = new Map<number, number[]>(edges.entries());
        const visited = new Set<number>();
        return dfs(map, 0, visited);
    }

    function dfs(map: Map<number, number[]>, node: number, visited: Set<number>): boolean {
        if (visited.has(node)) {
            return false;
        }

        visited.add(node);

        const children = map.get(node) || [];
        
        for (const child of children) {
            if (!dfs(map, child, visited)) {
                return false;
            }
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


