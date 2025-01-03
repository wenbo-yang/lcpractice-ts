xdescribe('leetcode 1064: fixed point', () => {
    function fixedPoint(arr: number[]): number {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const mid = (left + right) >> 1;
            if (arr[mid] >= mid) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return arr[left] === left ? left : -1;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
