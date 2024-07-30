xdescribe('leetcode 278: bad version binary search', () => {
    function isBadVersion(version: number): boolean {
        throw new Error('Not Implemented');
    }

    function firstBadVersion(n: number): number {
        let l = 1;
        let r = n;
        while (l < r) {
            let pivot = Math.floor((l + r) / 2);
            if (isBadVersion(pivot)) r = pivot;
            else l = pivot + 1;
        }

        return l;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
