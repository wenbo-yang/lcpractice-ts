xdescribe('leetcode 334: description', () => {
    // monotonec stack
    function increasingTriplet(nums: number[]): boolean {
        const stack: number[] = [];

        for (const num of nums) {
            while (stack.length > 0 && num < stack[stack.length - 1]) {
                stack.pop();
            }
            stack.push(num);
            if (stack.length === 3) {
                return true;
            }
        }

        return false;
    }

    it('test case 1 Input: [1,2,3,4,5], output true', () => {
        expect(increasingTriplet([1, 2, 3, 4, 5])).toBeTruthy();
    });

    it('test case 2 Input: [5,4,3,2,1], output false', () => {
        expect(increasingTriplet([5, 4, 3, 2, 1])).toBeFalsy();
    });

    it('test case 3 Input: [2,1,5,0,4,6], output true', () => {
        expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBeTruthy();
    });
});
