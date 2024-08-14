function maxRotateFunction(nums: number[]): number {
    // [4, 3, 2, 6]
    // [2  3, 0, 1]

    const sum = nums.reduce((a, b) => a + b);

    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current += i * nums[i];
    }

    let max = current;

    for (let i = 1; i < nums.length; i++) {
        current = current + (sum - nums[nums.length - i]) - (nums.length - 1) * nums[nums.length - i];
        max = Math.max(current, max);
    }

    return max;
}
