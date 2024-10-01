xdescribe('leetcode 702: description', () => {
    interface ArrayReader {
        get(index: number);
    }
    
    function search(reader: ArrayReader, target: number): number {
        let r = 1;
        while (reader.get(r) < target) {
            r <<= 1;
        }
        let l = r >> 1;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (reader.get(mid) >= target) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return reader.get(l) === target ? l : -1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
