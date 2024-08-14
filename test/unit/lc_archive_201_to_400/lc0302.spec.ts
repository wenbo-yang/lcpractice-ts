xdescribe('leetcode 302: description', () => {
    function smallestBoundingBox(grid: number[][], x: number, y: number): number {
        const islandCoordinates: Set<string> = new Set();
        const boundingBox = { top: Number.MAX_SAFE_INTEGER, bottom: Number.MIN_SAFE_INTEGER, left: Number.MAX_SAFE_INTEGER, right: Number.MIN_SAFE_INTEGER };
        mapIsland(grid, x, y, islandCoordinates, boundingBox);

        return (boundingBox.bottom - boundingBox.top + 1) * (boundingBox.right - boundingBox.left + 1);
    }

    function mapIsland(grid: number[][], x: number, y: number, islandCoordinates: Set<string>, boundingBox: { top: number; bottom: number; left: number; right: number }) {
        if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length || isVisited(islandCoordinates, x, y)) {
            return;
        }

        markVisited(islandCoordinates, x, y);

        boundingBox.top = Math.min(y, boundingBox.top);
        boundingBox.bottom = Math.max(y, boundingBox.bottom);
        boundingBox.left = Math.min(x, boundingBox.left);
        boundingBox.right = Math.max(x, boundingBox.right);

        mapIsland(grid, x + 1, y, islandCoordinates, boundingBox);
        mapIsland(grid, x - 1, y, islandCoordinates, boundingBox);
        mapIsland(grid, x, y + 1, islandCoordinates, boundingBox);
        mapIsland(grid, x, y - 1, islandCoordinates, boundingBox);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

function isVisited(islandCoordinates: Set<string>, x: number, y: number): boolean {
    return islandCoordinates.has([x, y].join());
}

function markVisited(islandCoordinates: Set<string>, x: number, y: number) {
    islandCoordinates.add([x, y].join());
}
