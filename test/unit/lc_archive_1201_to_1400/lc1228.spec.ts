xdescribe('leetcode 1228: missing number if arithmetic progression', () => {
    function missingNumber(arr: number[]): number {
        const x = ((arr[0] + arr.at(-1)!) * (arr.length + 1)) >> 1;
        const y = arr.reduce((acc, cur) => acc + cur, 0);
        return x - y;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
