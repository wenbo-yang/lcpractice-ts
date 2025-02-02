xdescribe('leetcode 1306: jump game iii', () => {
    function canReach(arr: number[], start: number): boolean {
        const mem = new Array<boolean>(arr.length);
        return canReachHelper(arr, start, mem);
    };

    function canReachHelper(arr: number[], index: number, mem: boolean[]): boolean {
        if (index >= arr.length || index < 0) {
            return false;
        }

        if (mem[index] !== undefined) {
            return mem[index];
        }

        if (arr[index] === 0) {
            mem[index] = true;
            return true;
        }

        mem[index] = canReachHelper(arr, arr[index + arr[index]], mem) || canReachHelper(arr, arr[index - arr[index]], mem);

        return mem[index];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
