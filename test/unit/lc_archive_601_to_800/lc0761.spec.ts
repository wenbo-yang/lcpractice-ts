xdescribe('leetcode 761: special binary string', () => {
    function makeLargestSpecial(s: string): string {
        if (!s) {
            return "";
        }
        const ans: string[] = [];
        let cnt = 0;
        for (let i = 0, j = 0; i < s.length; ++i) {
            cnt += s.charAt(i) == '1' ? 1 : -1;
            if (cnt == 0) {
                const t = '1' + makeLargestSpecial(s.substring(j + 1, i)) + "0";
                ans.push(t);
                j = i + 1;
            }
        }
        ans.sort().reverse();
        return ans.join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
