xdescribe('leetcode 882: reachable nodes in sub divided graph', () => {
    function reachableNodes(edges: number[][], maxMoves: number, n: number): number {
        type Pair = [number, number];

        // Graph representation where each node points to its neighbors with the edge weight.
        let graph: Pair[][] = Array.from({ length: n }, () => []);
        for (const edge of edges) {
            let from = edge[0], to = edge[1], weight = edge[2] + 1; // Increment weight to represent 'new' nodes within the edge.
            graph[from].push([to, weight]);
            graph[to].push([from, weight]);
        }

        let priorityQueue: Pair[] = [];
        function pushHeap(pair: Pair) {
            priorityQueue.push(pair);
            priorityQueue.sort((a, b) => a[0] - b[0]);
        }
        function popHeap() {
            return priorityQueue.pop(); 
        }
    
        pushHeap([0, 0]); // Start with node 0 and distance 0.
    
        // Initialize distances array with a large number to simulate Infinity.
        let distances: number[] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        distances[0] = 0; // Distance to the starting node is 0.

        // Dijkstra's algorithm to find shortest paths from node 0 to all other nodes.
        while (priorityQueue.length > 0) {
            let [currentDistance, currentNode] = popHeap()!;
        
            // Update distances to the neighboring nodes if a shorter path is found.
            for (const [neighbor, weight] of graph[currentNode]) {
                if (currentDistance + weight < distances[neighbor]) {
                    distances[neighbor] = currentDistance + weight;
                    pushHeap([distances[neighbor], neighbor]);
                }
            }
        }

        // Count how many nodes are reachable within the maxMoves.
        let reachableNodesCount = distances.filter(distance => distance <= maxMoves).length;
    
        // Count how many 'new' nodes within the edges are reachable.
        for (const edge of edges) {
            let from = edge[0], to = edge[1], count = edge[2];
        
            // Calculate how many 'new' nodes can be visited from both sides of the edge.
            let reachableFromFrom = Math.min(count, Math.max(0, maxMoves - distances[from]));
            let reachableFromTo = Math.min(count, Math.max(0, maxMoves - distances[to]));
        
            // Add to the total count; this is the number of 'new' nodes reachable from both ends of the edge.
            reachableNodesCount += Math.min(count, reachableFromFrom + reachableFromTo);
        }

        return reachableNodesCount;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
