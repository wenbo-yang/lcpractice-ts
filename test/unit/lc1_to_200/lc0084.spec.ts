xdescribe('leetcode 84: largest histogram area', () => {
    function largestRectangleArea(heights: number[]): number {
        heights.push(0);
        const n: number = heights.length;
        const stack: number[] = [];
        let result: number = 0;
        let i = 0;
        while (i < n) {
            if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
                stack.push(i++);
            } else {
                let h: number = heights[stack[stack.length - 1]];
                stack.pop();
                let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                result = Math.max(result, h * w);
            }
        }
        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
