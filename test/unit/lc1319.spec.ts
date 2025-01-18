xdescribe('leetcode 1319: number of operations to make network connected', () => {
    const parent: number[] = []; 

    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
        
    function makeConnected(n: number, connections: number[][]): number {
        for (let i = 0; i < n; ++i) parent[i] = i;
        let extraConnections = 0;
      
        for (const edge of connections) {
            const compA = edge[0], compB = edge[1]; 
            if (find(compA) === find(compB)) {
                ++extraConnections;
            } else {
                parent[find(compA)] = find(compB);
                --n;
            }
        }
        return (n - 1) > extraConnections ? -1 : n - 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
