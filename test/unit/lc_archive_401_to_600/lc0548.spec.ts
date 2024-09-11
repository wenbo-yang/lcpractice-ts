xdescribe('leetcode 548: split array with equal sum', () => {
    function splitArrayWithEqualSum(nums: number[]): boolean {
        if (nums.length >= 7) {
            const rangeSum: number[] = [nums[0]];
            for (let i = 1; i < nums.length; i++) {
                rangeSum.push(rangeSum[rangeSum.length - 1] + nums[i]);
            }

            // find j such that 0 to j - 1, j + 1 to n - 1;
            let j = 0;

            for (let j = 0; j < rangeSum.length; j++) {
                if (rangeSum[j - 1] === rangeSum[rangeSum.length - 1] - rangeSum[j]) {
                    let i = findi(rangeSum, j);
                    let k = findk(rangeSum, j + 1);

                    if (i !== -1 && k !== -1) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    function findi(rangeSum: number[], j: number): number {
        for (let i = 0; i < j; i++) {
            if (rangeSum[i - 1] === rangeSum[j - 1] - rangeSum[i]) {
                return i;
            }
        }

        return -1;
    }

    function findk(rangeSum: number[], j: number): number {
        for (let k = j; k < rangeSum.length; k++) {
            if (rangeSum[k] - rangeSum[j - 1] === rangeSum[rangeSum.length - 1] - rangeSum[k]) {
                return k;
            }
        }

        return -1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
