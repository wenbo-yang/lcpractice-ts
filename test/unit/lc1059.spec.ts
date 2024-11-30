xdescribe('leetcode 1059: all path from source lead to destination', () => {
    function leadsToDestination(n: number, edges: number[][], source: number, destination: number): boolean {
        const graph: number[][] = [];
        const visited: boolean[] = [];
        const flags: number[] = [];


        for (let i = 0; i < n; i++) {
          graph.push([]);
        }
        edges.forEach(edge => {
          graph[edge[0]].push(edge[1]);
        });
      
        
        visited.fill(false, 0, n);
        flags.fill(0, 0, n);

        return dfs(source, destination, visited, graph, flags);
    }

    function dfs(node: number, destination: number, visited: boolean[], graph: number[][], flags: number[]): boolean {
        if (node === destination) {
          return graph[node].length === 0;
        }
        if (flags[node] !== 0) {
          return flags[node] === 1;
        }
        if (visited[node] || graph[node].length === 0) {
          return false;
        }
    
        visited[node] = true;
        for (const adjacentNode of graph[node]) {
          if (!dfs(adjacentNode, destination, visited, graph, flags)) {
            flags[node] = -1;
            visited[node] = false;
            return false;
          }
        }
        flags[node] = 1;
        visited[node] = false;
        return true;
    }

  

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
