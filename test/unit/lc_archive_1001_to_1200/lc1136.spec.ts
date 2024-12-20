xdescribe('leetcode 1136: parallel courses', () => {
    function minimumSemesters(n: number, relations: number[][]): number {
        // disjoint sets 
        // for each set, try to detect circle
        // for all sets keep track of visited nodes 
        const mem = new Map<number, number>(); // keeps track of node and depth of node;

        // construct node child relation ship
        const parentChildrenMap = new Map<number, number[]>();
        relations.forEach(r => parentChildrenMap.set(r[0], (parentChildrenMap.get(r[0]) || []).concat(r[1])));

        for (let i = 1; i <= n; i++) {
            if (dfs(i, parentChildrenMap, mem, new Set<number>()) === -1) {
                return -1;
            }
        }

        return Math.max(...Array.from(mem.values()));
    }

    function dfs(node: number, parentChildrenMap: Map<number, number[]>, mem: Map<number, number>, visited: Set<number>): number {
        if (mem.has(node)) {
            return mem.get(node) || -1;
        }

        if (visited.has(node)) {
            mem.set(node, -1);
            return -1;
        }

        visited.add(node);

        const children = parentChildrenMap.get(node)!; // coerce away the undefined value //

        let maxDepth = -1;

        for (const child of children) {
            let depth = dfs(child, parentChildrenMap, mem, visited);
            if (depth === -1) {
                mem.set(node, -1);
                return -1;
            }
            
            maxDepth = Math.max(maxDepth, depth);
        }

        mem.set(node, maxDepth);
        return maxDepth;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


