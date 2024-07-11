xdescribe('leetcode 42: Trapping rain water', () => {
    function trap(height: number[]): number {
        if (height.length === 0) {
            return 0;
        }

        let l = 0;
        let r = height.length - 1;

        let maxLeft = height[l];
        let maxRight = height[r];

        let result = 0;

        while (l < r) {
            if (maxLeft < maxRight) {
                result += maxLeft - height[l];
                l++;

                maxLeft = Math.max(maxLeft, height[l]);
            } else {
                result += maxRight - height[r];
                r--;

                maxRight = Math.max(maxRight, height[r]);
            }
        }

        return result;
    }

    it('test case 1 Input: height = [0,1,0,2,1,0,1,3,2,1,2,1], output 6', () => {
        const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        const result = trap(height);

        expect(result).toEqual(6);
    });
});
