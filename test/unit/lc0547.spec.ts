xdescribe('leetcode 547: number of province', () => {
    function findCircleNum(isConnected: number[][]): number {
        const visited = new Array<boolean>(isConnected.length).fill(false);
        let count = 0;
        for (let i = 0; i < isConnected.length; i++) {            
            if (mapConnected(isConnected, i, visited)) {
                count++;
            }
        }

        return count;
    };

    function mapConnected(isConnected: number[][], vertex: number, visited: boolean[]): boolean {
        if (visited[vertex]) {
            return false;
        }

        visited[vertex] = true;

        const edges = isConnected[vertex];

        for (let i = vertex; i < isConnected[vertex].length; i++) {
            mapConnected(isConnected, i, visited);
        }

        return true;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

