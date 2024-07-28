xdescribe('leetcode 275: description', () => {
    function hIndex(citations: number[]): number {
        for (let i = 1; i <= citations.length; i++) {
            if (citations[0] + i - 1 <= i - 1) {
                return i - 1;
            }
        }

        return citations.length;
    };

    function hIndexBinarySearch(citations: number[]): number {
        let l = 0;
        let r = citations.length;

        while (l < r) {
            const pivot = Math.floor((l + r) / 2);

            if (citations[citations.length - pivot - 1] <= pivot) {
                r  = pivot;
            }
            else {
                l = pivot + 1;
            }
        }

        return l;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
