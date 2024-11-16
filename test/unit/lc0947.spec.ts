xdescribe('leetcode 947: most stone removed from the same row and col', () => {
    
    function initParents(size: number, parents): void {
        for (let i = 0; i < size; i++) {
            parents[i] = i;
        }
    }
    
    // Function to find the root of element 'x' with path compression.
    function find(x: number, parents): number {
        if (parents[x] !== x) {
            parents[x] = find(parents[x], parents); // Path compression step
        }
        return parents[x];
    }
    
    function removeStones(stones: number[][]): number {
        const parents: number[] = [];
    
        const maxCoord = 10010;
        initParents(maxCoord << 1, parents);
    
        stones.forEach(([row, col]) => {
            const rowParent = find(row, parents);
            const colParent = find(col + maxCoord, parents);
            parents[rowParent] = colParent;
        });
    
        const uniqueRoots = new Set<number>();
        stones.forEach(([row, _]) => {
            uniqueRoots.add(find(row, parents));
        });
    
        return stones.length - uniqueRoots.size;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
