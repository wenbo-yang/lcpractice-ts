xdescribe('leetcode 1208: get equal subscrings within budges', () => {
    function equalSubstring(s: string, t: string, maxCost: number): number {
        let i = 0;
        const diff = new Array<number>(s.length).fill(0).map(n => Math.abs(s[i].charCodeAt(0) - t[i++].charCodeAt(0)));
        
        i = 0;
        const prefixSum = new Array<number>(s.length).fill(0).map(n => diff[i] + (diff[i - 1] || 0));
        let l = -1;
        let r = 0;
        let maxWindowSize = 0;
        for (let i = 0; i < prefixSum.length; i++) {
            if (prefixSum[r] - (prefixSum[l] || 0) <= maxCost) {
                r++;
                maxWindowSize = Math.max(maxWindowSize, r - l - 1);
            }
            else {
                l++;
            }
        }

        return maxWindowSize;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
