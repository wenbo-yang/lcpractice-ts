xdescribe('leetcode 1013: partition arrat ubti three oarts with equal sum', () => {
    function canThreePartsEqualSum(arr: number[]): boolean {
        let totalSum: number = 0;
        for (let value of arr) {
            totalSum += value;
        }
    
        if (totalSum % 3 !== 0) return false;
    
        let targetSum: number = totalSum / 3;
        let i: number = 0, j: number = arr.length - 1;
        let sumFromStart: number = 0, sumFromEnd: number = 0;
        while (i < arr.length) {
            sumFromStart += arr[i];
            if (sumFromStart === targetSum) {
                break;
            }
            ++i;
        }
        while (j >= 0) {
            sumFromEnd += arr[j];
            if (sumFromEnd === targetSum) {
                break;
            }
            --j;
        }
        return i < j - 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
