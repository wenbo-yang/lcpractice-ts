xdescribe('leetcode 1245: tree diameter', () => {
    function treeDiameter(edges: number[][]): number {
        const treeMap = new Map<number, number[]>();
        edges.forEach(edge => treeMap.set(edge[0], (treeMap.get(edge[0]) || []).concat(edge[1])));

        const visited = new Set<number>();
        let { node: node1 } = getDeepestNode(treeMap, treeMap.entries().next().value[0] as number, visited);
        
        visited.clear();
        let { depth } = getDeepestNode(treeMap, node1, visited);
        
        return depth;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


function getDeepestNode(treeMap: Map<number, number[]>, currentNode: number, visited: Set<number>): { node: number; depth: number; } {
    if (!treeMap.has(currentNode) || visited.has(currentNode)) {
        return { node: -1, depth: -1};
    }

    visited.add(currentNode);

    const children = treeMap.get(currentNode)!;

    let currentMaxNode = currentNode;
    let currentMaxDepth = 0;
    for (const child of children) {
        const {node, depth} = getDeepestNode(treeMap, child, visited);
        if (depth + 1 > currentMaxDepth) {
            currentMaxDepth = depth + 1;
            currentMaxNode = node;
        }
    }

    return {node: currentMaxNode, depth: currentMaxDepth};
}

