xdescribe('leetcode 847: shortest path visiting all nodes', () => {
    function shortestPathLength(graph: number[][]): number {
        const nodeCount = graph.length; 

        const visited: boolean[][] = Array.from({ length: nodeCount }, () => 
                                            new Array(1 << nodeCount).fill(false));

        const queue: number[][] = [];

        for (let i = 0; i < nodeCount; i++) {
            const startState = 1 << i; 
            queue.push([i, startState]);
            visited[i][startState] = true;
        }
        
        for (let steps = 0; ; steps++) {
            for (let size = queue.length; size > 0; size--) {
                const [currentNode, state] = queue.shift()!; 
    
                if (state === (1 << nodeCount) - 1) {
                    return steps;
                }
    
                for (const nextNode of graph[currentNode]) {
                    const nextState = state | (1 << nextNode); 
                  
                    if (!visited[nextNode][nextState]) {
                        visited[nextNode][nextState] = true;
                        queue.push([nextNode, nextState]);
                    }
                }
            }
        }
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


