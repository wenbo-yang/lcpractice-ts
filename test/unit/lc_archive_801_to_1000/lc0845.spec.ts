xdescribe('leetcode 845: longest mountain in array', () => {
    function longestMountain(arr: number[]): number {
        let ll = 0;
        let p = 1;
        let lr = 0;
        let foundPeak = false;
        let max = 0;
        while (p < arr.length && lr < arr.length) {
            if (foundPeak) {
                if (arr[lr] <= arr[lr - 1]) {
                    lr++;
                }
                else {
                    foundPeak = false;
                    max = Math.max(max, lr - ll);
                    ll = lr - 1;
                }
            }
            else {
                if (arr[p] >= arr[p-1]) {
                    p++;
                    continue;
                }
    
                if (arr[p] < arr[p - 1]) {
                    foundPeak = true;
                    lr = p;
                }
            }
        }

        return max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
