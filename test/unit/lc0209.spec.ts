xdescribe('leetcode 209: minimum subArray length', () => {
    function minSubArrayLen(target: number, nums: number[]): number {
        let currentMin = Number.MAX_SAFE_INTEGER;

        let l = 0;
        let r = 0;
        let currentSum = 0;

        while (r < nums.length) {
            console.log({ currentMin, currentSum, l, r });

            if (currentSum > target) {
                currentSum -= nums[l++];
                continue;
            }

            if (currentSum === target) {
                currentMin = Math.min(currentMin, r - l);
                currentMin -= nums[l++];
            }

            currentSum += nums[r++];

            console.log({ currentMin, currentSum, l, r });
        }

        return currentMin;
    }

    it('test case 1 Input: [2,3,1,2,4,3], output 2', () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
    });
});
