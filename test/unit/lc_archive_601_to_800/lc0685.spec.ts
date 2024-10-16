xdescribe('leetcode 685: description', () => {

    function findRedundantDirectedConnection(edges: number[][]): number[] {
        const vertices = new Map<number, Set<number>>();
        
        constructVerticesMapFromEdges(edges, vertices);

        const result = new Set<string>();
        for (const vertex of vertices.keys()) {
            const visited = new Set<number>();
            mapVerticesForRedundantConnections(0, vertex, vertices, visited, result);
        }

        edges.reverse();
        for (const edge of edges) {
            if (result.has(edge.join())) {
                return edge;
            }
        }

        return [];
    };

    function mapVerticesForRedundantConnections(parent: number, vertex: number, vertices: Map<number, Set<number>>, visited: Set<number>, result: Set<string>) {
        if (visited.has(vertex) && parent !== 0) {
            result.add([parent, vertex].join());
            return;
        }

        visited.add(vertex);
        const children = vertices.get(vertex);
        if (children) {
            for (const child of children) {
                mapVerticesForRedundantConnections(vertex, child, vertices, visited, result);
            }
        }        
    }

    function constructVerticesMapFromEdges(edges: number[][], vertices: Map<number, Set<number>>) {
        for (const edge of edges) {
            const children = vertices.get(edge[0]) || new Set<number>();
            children.add(edge[1]);
            vertices.set(edge[0], children);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




