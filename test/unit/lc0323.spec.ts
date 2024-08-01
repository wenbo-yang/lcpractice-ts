xdescribe('leetcode 323: number of connected components in an undirected graph', () => {
    // union find
    // n = 5
    // construct() n nodes, and n ranks n = nodes 
    // pass in edge one at a time
    // union
    // find parents and set parents
    // find number of parents

    // 2 -> 1
    // 3 -> 1

    // 1 -> 0
    // 

    function numberOfGraphs(n: number, edges: number[][]): number {
        const nodeParentMap = new Map<number, number>();
        const nodeRankMap = new Map<number, number>();
        
        for (let i = 0; i < n; i++) {
            nodeParentMap.set(i, i);
            nodeRankMap.set(i, i);
        }

        for (const edge of edges) {
            union(nodeParentMap, nodeRankMap, edge)
        }

        const resultSet = new Set<number>();

        for (let i = 0; i < n; i++) {
            const parent = find(nodeParentMap, i);
            resultSet.add(parent);
        }

        return resultSet.size;
    }

    function union(nodeParentMap: Map<number, number>, nodeRankMap: Map<number, number>, edge: number[]) {
        const node1Rank = nodeRankMap.get(edge[0]) || Number.MAX_SAFE_INTEGER;
        const node2Rank = nodeRankMap.get(edge[1]) || Number.MAX_SAFE_INTEGER;

        if (node1Rank < node2Rank) {
            // set node2's parent to node 1
            const target = find(nodeParentMap, edge[0]);
            nodeParentMap.set(edge[1], target);
        }
        else {
            // or the other way around
            const target = find(nodeParentMap, edge[1]);
            nodeParentMap.set(edge[0], target);
        }

    }

    function find(nodeParentMap: Map<number, number>, target: number): number {
        const parent = nodeParentMap.get(target) || -1;

        while (parent !== target) {
            nodeParentMap.set(target, find(nodeParentMap, parent))
        }

        return parent;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



