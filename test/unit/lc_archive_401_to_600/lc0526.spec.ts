xdescribe('leetcode 526: description', () => {
    function countArrangement(n: number): number {
        const arr = new Array<number>(n).fill(0);
        return findArrangementHelper(arr, 0);
    }

    function findArrangementHelper(arr: number[], index: number): number {
        if (index >= arr.length) {
            return 1;
        }

        let total = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 1) {
                if ((i + 1) % (index + 1) === 0 || (index + 1) % (i + 1) === 0) {
                    const newArr = Array.from(arr);
                    newArr[i] = 1;
                    total += findArrangementHelper(newArr, index + 1);
                }
            }
        }

        return total;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
