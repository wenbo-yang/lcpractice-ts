xdescribe('leetcode 1243: array transformation', () => {
    function transforma(arr: number[]): void {
        let shouldChange: number[] = [];
        
        while (shouldChange.filter(x => x === 0).length !== arr.length) {
            shouldChange = new Array<number>(arr.length).fill(0);

            for (let i = 1; i < arr.length - 1; i++ ){
                if (arr[i] < arr[i + 1] && arr[i] < arr[i - 1]) {
                    shouldChange[i] = 1;
                }
                
                if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
                    shouldChange[i] = -1;
                }
            }

            for (let i = 1; i < arr.length - 1; i++) {
                arr[i] += shouldChange[i];
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
