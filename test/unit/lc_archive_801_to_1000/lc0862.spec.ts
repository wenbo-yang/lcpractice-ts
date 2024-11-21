xdescribe('leetcode 862: shortest subarray with sum at least k', () => {
    function shortestSubarray(nums: number[], k: number): number {
        // [1 2 3 4] 6
        const t: number[] = [];
        nums.forEach(n => t.push(n + (nums[nums.length - 1] || 0)));

        const queue: number[] = [];
        let minLength = nums.length + 1;

        for(let i = 0; i <= nums.length; i++) {
            while (queue.length && t[i] - t[queue[0]] >= k) {
                minLength = Math.min(minLength, i - queue[0]);
                queue.shift();
            }

            while(queue.length && t[queue[0]] >= t[i]) {
                queue.pop();
            }

            queue.push(i);
        }

        return minLength > nums.length ? -1 : minLength;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
