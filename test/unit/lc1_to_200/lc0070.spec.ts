xdescribe('leetcode 70: climb stairs', () => {
    function climbStairs(n: number): number {
        if (n <= 2) {
            return n;
        }

        let prevPrev = 1;
        let prev = 2;
        let current = 0;
        let pointer = 3;
        while (pointer <= n) {
            current = prev + prevPrev;
            prevPrev = prev;
            prev = current;
            pointer++;
        }

        return current;
    }

    it('test case 1 Input: n = 3,  output 3', () => {
        const result = climbStairs(3);

        expect(result).toEqual(3);
    });
});
