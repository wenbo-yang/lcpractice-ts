xdescribe('leetcode 852: peak index in mountain array', () => {
    function peakIndexInMountainArray(arr: number[]): number {
        let l = 1;
        let r = arr.length - 2;
        
        while (l < r) {
            const mid = Math.floor((r + l) / 2);

            if (arr[mid] > arr[mid + 1]) {
                l = mid + 1;
            }
            else {
                r = mid;
            }
        }

        return l;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
