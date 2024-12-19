xdescribe('leetcode 1192: critical connection in a network', () => {
    function criticalConnections(n: number, connections: number[][]): number[][] {
        let visitTime: number = 0;

        const graph: number[][] = Array.from({ length: n }, () => []);

        const discoveryTime: number[] = Array(n).fill(0);
        const lowLink: number[] = Array(n).fill(0);

        for (const [node1, node2] of connections) {
            graph[node1].push(node2);
            graph[node2].push(node1);
        }

        const criticalEdges: number[][] = [];

        function tarjanDFS(currentNode: number, parentNode: number) {
            discoveryTime[currentNode] = lowLink[currentNode] = ++visitTime;

            for (const neighbor of graph[currentNode]) {
                if (neighbor === parentNode) continue;
                if (!discoveryTime[neighbor]) {
                    tarjanDFS(neighbor, currentNode);
                    lowLink[currentNode] = Math.min(lowLink[currentNode], lowLink[neighbor]);

                    if (lowLink[neighbor] > discoveryTime[currentNode]) {
                        criticalEdges.push([currentNode, neighbor]);
                    }
                } else {
                    lowLink[currentNode] = Math.min(lowLink[currentNode], discoveryTime[neighbor]);
                }
            }
        }

        tarjanDFS(0, -1);

        return criticalEdges;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
