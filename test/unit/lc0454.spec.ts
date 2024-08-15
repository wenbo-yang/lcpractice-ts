xdescribe('leetcode 454: 4 sum', () => {
    function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
        const sums = new Map<number, number>();
        for (const a of nums1)  {
            for (const b of nums2) {
                sums.set(a + b, (sums.get(a + b) || 0) + 1);
            }
        }
        
        let ans = 0;
        const array = Array.from(sums.entries());
        for (const c of nums3) {
            for (const d of nums4) {
                const it = sums.get(- c - d);
                if (it && array[array.length - 1][0] !== -c-d && array[array.length - 1][1] !== it) {
                    ans += it;
                }
            }
        }

        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
