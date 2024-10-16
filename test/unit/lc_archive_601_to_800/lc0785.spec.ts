xdescribe('leetcode 785: is graph bi partite', () => {
    function isBipartite(graph: number[][]): boolean {
        const n = graph.length;
        const colors: number[] = new Array<number>(n).fill(0);
        for (let i = 0; i < n; i++) {
            if (!colors[i] && !coloring(graph, colors, 1, i)) {
                return false;
            }
                
        }
        
        return true;
    };

    function coloring(graph: number[][], colors: number[], color: number, node: number) {    
        if (colors[node]) {
            return colors[node] === color;
        }
        
        colors[node] = color;
        
        for (let nxt of graph[node]) {
            if (!coloring(graph, colors, -color, nxt)) {
                return false;
            }
        }
          
        return true;
      }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
