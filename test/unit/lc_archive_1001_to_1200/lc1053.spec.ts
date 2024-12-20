xdescribe('leetcode 1053: previous permutation with one swap', () => {
    function prevPermOpt1(arr: number[]): number[] {
        const length = arr.length;
  
        for (let i = length - 1; i > 0; --i) {
            if (arr[i - 1] > arr[i]) {
                for (let j = length - 1; j > i - 1; --j) {
                    if (arr[j] < arr[i - 1] && arr[j] !== arr[j - 1]) {
                        let temp = arr[i - 1];
                        arr[i - 1] = arr[j];
                        arr[j] = temp;
                        return arr;
                    }
                }
            }
        }
    
        return arr;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
