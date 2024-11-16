xdescribe('leetcode 941: valid mountain array', () => {
    function validMountainArray(arr: number[]): boolean {
        let maxFromEnd = getMaxFromEnd(arr);

        if (maxFromEnd === -1 || maxFromEnd === 0 || maxFromEnd === arr.length - 1) {
            return false;
        }

        for (let i = 1; i < maxFromEnd; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }

        return true;
    };

    function getMaxFromEnd(arr: number[]) {
        let maxIndex = arr.length - 1;
        let max = arr[arr.length - 1];

        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] < arr[i - 1]) {
                return -1;
            }

            if (arr[i] > max) {
                max = arr[i];
                maxIndex = i;
            }
        }

        return maxIndex;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


