xdescribe('leetcode 416: partition equal subset sum', () => {
    function canPartition(nums: number[]): boolean {
        const totalSum = nums.reduce((a,b) => a+b);

        if (totalSum % 2 !== 0) {
            return false;
        }

        const df = new Array<number>(totalSum + 1).fill(0);

        df[0] = 1;
        for (const num of nums) {
            for (let i = totalSum; i >= 0; i--) {
                if (df[i]) {
                    df[i + num] = 1;
                }
            }

            if (df[Math.floor(totalSum / 2)] !== 0) {
                return true;
            }
        }

        return false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});