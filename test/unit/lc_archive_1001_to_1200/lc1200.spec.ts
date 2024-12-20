xdescribe('leetcode 1200: min abs diff', () => {
    function minimumAbsDifference(arr: number[]): number[][] {
        arr.sort((a,b) => a - b);
        let minDiff = Number.MAX_SAFE_INTEGER;
        let result: number[][] = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] < minDiff) {
                result = [];
                result.push([arr[i - 1], arr[i]]);
            }
            else if (arr[i] - arr[i - 1] === minDiff) {
                result.push([arr[i], arr[i -1]]);
            }
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
