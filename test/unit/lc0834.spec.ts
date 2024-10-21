xdescribe('leetcode 834: description', () => {
    function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
        const graph: number[][] = Array.from({ length: n }, () => []);
        for (const [node1, node2] of edges) {
            graph[node1].push(node2);
            graph[node2].push(node1);
        }

        const answer: number[] = new Array(n).fill(0);
        const subtreeSize: number[] = new Array(n).fill(0);

        const dfsCalculateDistances = (node: number, parent: number, distanceToRoot: number) => {
            answer[0] += distanceToRoot;
            subtreeSize[node] = 1;
            for (const adjacentNode of graph[node]) {
                if (adjacentNode !== parent) {
                    dfsCalculateDistances(adjacentNode, node, distanceToRoot + 1);
                    subtreeSize[node] += subtreeSize[adjacentNode];
                }
            }
        };

        const dfsRedistributeDistances = (node: number, parent: number, totalDistance: number) => {
            answer[node] = totalDistance;
            for (const adjacentNode of graph[node]) {
                if (adjacentNode !== parent) {
                    const newDistance = totalDistance - subtreeSize[adjacentNode] + (n - subtreeSize[adjacentNode]);
                    dfsRedistributeDistances(adjacentNode, node, newDistance);
                }
            }
        };

        dfsCalculateDistances(0, -1, 0);
        dfsRedistributeDistances(0, -1, answer[0]);

        return answer;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
