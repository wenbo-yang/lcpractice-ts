xdescribe('leetcode 427: construct quad tree', () => {
    class _Node {
        val: boolean;
        isLeaf: boolean;
        topLeft: _Node | null;
        topRight: _Node | null;
        bottomLeft: _Node | null;
        bottomRight: _Node | null;
        constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
            this.val = val === undefined ? false : val;
            this.isLeaf = isLeaf === undefined ? false : isLeaf;
            this.topLeft = topLeft === undefined ? null : topLeft;
            this.topRight = topRight === undefined ? null : topRight;
            this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
            this.bottomRight = bottomRight === undefined ? null : bottomRight;
        }
    }

    interface BoundingRect {
        topLeft: Point;
        bottomRight: Point;
    }

    interface Point {
        r: number;
        c: number;
    }

    function construct(grid: number[][]): _Node | null {
        const boundingRect: BoundingRect = { topLeft: { r: 0, c: 0 }, bottomRight: { r: grid.length - 1, c: grid[0].length - 1 } };

        const root = constructQuadTreeHelper(grid, boundingRect);

        return root || null;
    }

    function constructQuadTreeHelper(grid: number[][], boundingRect: BoundingRect): _Node | undefined {
        if (outofBounds(boundingRect, grid)) {
            return undefined;
        }

        if (equals(boundingRect.topLeft, boundingRect.bottomRight)) {
            return new _Node(grid[boundingRect.topLeft.r][boundingRect.topLeft.r] === 1 ? true : false, true);
        }

        const topLeftBoundingRect: BoundingRect = { topLeft: { r: boundingRect.topLeft.r, c: boundingRect.topLeft.c }, bottomRight: { r: Math.floor((boundingRect.topLeft.r + boundingRect.bottomRight.r) / 2), c: Math.floor((boundingRect.topLeft.c + boundingRect.bottomRight.c) / 2) } };
        const topLeft = constructQuadTreeHelper(grid, topLeftBoundingRect);

        const topRightBoundingRect: BoundingRect = { topLeft: { r: boundingRect.topLeft.r, c: Math.floor((boundingRect.topLeft.c + boundingRect.bottomRight.c) / 2) + 1 }, bottomRight: { r: Math.floor((boundingRect.topLeft.r + boundingRect.bottomRight.r) / 2), c: boundingRect.bottomRight.c } };
        const topRight = constructQuadTreeHelper(grid, topRightBoundingRect);

        const bottomLeftBoundingRect: BoundingRect = { topLeft: { r: Math.floor((boundingRect.topLeft.r + boundingRect.bottomRight.r) / 2) + 1, c: boundingRect.topLeft.c }, bottomRight: { r: Math.floor((boundingRect.topLeft.r + boundingRect.bottomRight.r) / 2) + 1, c: Math.floor((boundingRect.topLeft.c + boundingRect.bottomRight.c) / 2) } };
        const bottomLeft = constructQuadTreeHelper(grid, bottomLeftBoundingRect);

        const bottomRightBoundingRect: BoundingRect = { topLeft: { r: Math.floor((boundingRect.topLeft.r + boundingRect.bottomRight.r) / 2) + 1, c: Math.floor((boundingRect.topLeft.c + boundingRect.bottomRight.c) / 2) + 1 }, bottomRight: { r: boundingRect.bottomRight.r, c: boundingRect.bottomRight.c } };
        const bottomRight = constructQuadTreeHelper(grid, bottomRightBoundingRect);

        if (topLeft && topRight && bottomLeft && bottomRight && ((topLeft.val === topRight.val) === bottomLeft.val) === bottomRight.val) {
            return new _Node(topLeft.val, false);
        }

        return new _Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
    }

    function outofBounds(boundingRect: BoundingRect, grid: number[][]) {
        return boundingRect.topLeft.r > boundingRect.bottomRight.r || boundingRect.topLeft.c > boundingRect.bottomRight.c || boundingRect.topLeft.r >= grid.length || boundingRect.topLeft.r < 0 || boundingRect.topLeft.c >= grid[0].length || boundingRect.topLeft.c < 0 || boundingRect.bottomRight.r >= grid.length || boundingRect.bottomRight.r < 0 || boundingRect.bottomRight.c >= grid[0].length || boundingRect.bottomRight.c < 0;
    }

    function equals(topLeft: Point, bottomRight: Point): boolean {
        return topLeft.c === bottomRight.c && topLeft.r === bottomRight.r;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
