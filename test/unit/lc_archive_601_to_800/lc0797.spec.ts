xdescribe('leetcode 797: description', () => {
    function allPathsSourceTarget(graph: number[][]): number[][] {
        const parentChildMap = new Map<number, Set<number>>();
        let end = -1;
        for (const e of graph) {
            for (let i = 1; i < e.length; i++) {
                const children = parentChildMap.get(e[i]) || new Set<number>();
                children.add(e[0]);
                parentChildMap.set(e[i], children);
            }
            
            end = Math.max(end, e[0]);
        }

        const path = new Set<string>();

        dfs(0, end, parentChildMap, [0], new Set<number>, path);

        return Array.from(path).map(p => p.split(',').map(n => Number[n]));
    };

    function dfs(currentNode: number, end: number, parentChildMap: Map<number, Set<number>>, currentPath: number[], visited: Set<number>, path: Set<string>) {
        if (currentNode === end) {
            path.add(currentPath.join());
            return;
        }

        if (visited.has(currentNode)) {
            return;
        }

        const children = parentChildMap.get(currentNode) || new Set();
        
        for (const child of children) {
            currentPath.push(child);
            dfs(child, end, parentChildMap, currentPath, visited, path);
            currentPath.pop();
        }
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

