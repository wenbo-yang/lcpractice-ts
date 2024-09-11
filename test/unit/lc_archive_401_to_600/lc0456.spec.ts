xdescribe('leetcode 456: 132 pattern', () => {
    // monotonic stack

    function find132pattern(nums: number[]): boolean {
        if (!nums || nums.length < 3) {
            return false;
        }

        const stack: number[] = [];
        stack.push(nums[0]);

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > lastOf(stack)) {
                stack.push(nums[i]);
            } else if (nums[i] > firstOf(stack)) {
                return true;
            } else {
                while (nums[i] < lastOf(stack)) {
                    stack.pop();
                }

                stack.push(nums[i]);
            }
        }

        return true;
    }

    function lastOf(stack: number[]): number {
        return stack[stack.length - 1] || Number.MIN_SAFE_INTEGER;
    }

    function firstOf(stack: number[]): number {
        return stack.length >= 2 ? stack[0] : Number.MAX_SAFE_INTEGER;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
