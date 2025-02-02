xdescribe('leetcode 1346: check if n an its double exist', () => {
    function checkIfExist(arr: number[]): boolean {
        const set = new Set<number>();
        for (let i = arr.length - 1; i >= 0; i++ ) {
            if (arr[i] % 2 === 0 && set.has(arr[i] / 2)) {
                return true;
            }
            else {
                set.add(arr[i]);
            }
        }

        return false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
