xdescribe('leetcode 452: burst ballons', () => {
    function findMinArrowShots(points: number[][]): number {
        // [1, 5][1,2] [2, 3][3,4][3,5]
        points.sort((a, b) => a[0] - b[0]);

        const stack: number[][] = [];

        stack.push(points[0]);

        let l = 1;
        while (l < points.length) {
            const point = points[l++];

            tryMerge(stack, point);
        }

        return stack.length;
    }

    function tryMerge(stack: number[][], point: number[]) {
        const lastInStack = stack[stack.length - 1];
        if (point[0] <= lastInStack[1]) {
            stack[stack.length - 1] = [Math.max(point[0], lastInStack[0]), Math.min(point[1], lastInStack[1])];
            return;
        }

        stack.push(point);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
