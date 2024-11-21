xdescribe('leetcode 830: large group positions', () => {
    function largeGroupPositions(s: string): number[][] {
        let l = 0;
        let r = 0;
        const largeGroups: number[][] = [];
        while (r <= s.length) {
            if (s[r] === s[l]) {
                r++;
            }
            else {
                if (r - l >= 3) {
                    largeGroups.push([l, r - 1])
                }
                l = r;
            }
        }

        return largeGroups; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
