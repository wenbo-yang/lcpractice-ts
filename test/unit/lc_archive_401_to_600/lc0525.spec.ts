xdescribe('leetcode 525: contiguous array', () => {
    function findMaxLength(nums: number[]): number {
        const zeroCount = new Array<number>(nums.length).fill(0);
        const oneCount = new Array<number>(nums.length).fill(0);
        zeroCount[0] = nums[0] === 0 ? 1 : 0;
        oneCount[0] = nums[0] === 1 ? 1 : 0;
        for (let i = 0; i < nums.length; i++) {
            zeroCount[i] = nums[i] === 0 ? zeroCount[i - 1] + 1 : zeroCount[i - 1];
            oneCount[i] = nums[i] === 1 ? oneCount[i - 1] + 1 : oneCount[i - 1];
        }

        if (zeroCount[zeroCount.length - 1] === 0 || oneCount[oneCount.length - 1] === 0) {
            return 0;
        }

        if (zeroCount[zeroCount.length - 1] === oneCount[oneCount.length - 1]) {
            return nums.length;
        }

        //   1  1  0  1  1  0  0
        // z 0  0  1  1  1  2  3
        // o 1  2  2  3  4  4  4

        const smaller = lastOf(zeroCount) < lastOf(oneCount) ? zeroCount : oneCount;
        const larger = lastOf(zeroCount) > lastOf(oneCount) ? zeroCount : oneCount;

        // find first currance of smaller.max
        const smallerIndex = smaller.indexOf(lastOf(smaller));
        const diff = larger[smallerIndex] - smaller[smallerIndex];

        return smallerIndex - larger.lastIndexOf(larger[smallerIndex] - diff);
    }

    function lastOf(array: number[]) {
        return array[array.length - 1];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
