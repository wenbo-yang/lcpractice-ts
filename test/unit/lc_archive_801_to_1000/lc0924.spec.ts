xdescribe('leetcode 924: minimize malware spread', () => {
    // union find 
    // whith initial being rank 0;
    function minMalwareSpread(graph: number[][], initial: number[]): number {
        let n = graph.length;
      
        let parent: number[] = new Array(n).fill(0).map((value, index) => index);
        let size: number[] = new Array(n).fill(1);
      
        function find(x: number): number {
          if (parent[x] !== x) {
            parent[x] = find(parent[x]);
          }
          return parent[x];
        }
      
        for (let i = 0; i < n; ++i) {
          for (let j = i + 1; j < n; ++j) {
            if (graph[i][j] === 1) {
              let parentA = find(i);
              let parentB = find(j);
              if (parentA !== parentB) {
                parent[parentA] = parentB; 
                size[parentB] += size[parentA];
              }
            }
          }
        }
      
        initial.sort((a, b) => a - b);
      
        let minInfected = Number.MAX_SAFE_INTEGER;
        let result = initial[0];
      
        for (let i = 0; i < initial.length; ++i) {
          let totalInfected = 0;
          let uniqueParents: Set<number> = new Set();
      
          for (let j = 0; j < initial.length; ++j) {
            if (i === j) continue;
            let root = find(initial[j]);
      
            if (!uniqueParents.has(root)) {
              uniqueParents.add(root);
              totalInfected += size[root];
            }
          }
      
          if (minInfected > totalInfected) {
            minInfected = totalInfected;
            result = initial[i];
          }
        }
      
        return result;
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
