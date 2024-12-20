xdescribe('leetcode 1122: relative sort array', () => {
    function relativeSortArray(arr1: number[], arr2: number[]): number[] {
        arr2.reverse();
        const map = new Map<number, number>();
        for (const n of arr1) {
            map.set(n, (map.get(n)) || 0 + 1);
        }

        let index = 0;
        while (arr2.length) {
            const curr = arr2.pop();
            if (!curr) break;
            while (map.get(curr) !== 0) {
                arr1[index++] = curr;
                map.set(curr, (map.get(curr) || 1) - 1);
            }
            map.delete(curr);
        }

        const leftOver = Array.from(map.entries()).sort((a,b) => a[0] - b[0]);

        for (const entry of leftOver) {
            while(entry[1] !== 0) {
                arr1[index++] = entry[0];
                entry[1]--;
            }
        }

        return arr1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
