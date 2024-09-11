xdescribe('leetcode num: description', () => {
    function checkRecord(s: string): boolean {
        let late = false;
        let absence = 0;
        let i = 0;
        while (i < s.length) {
            if (s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') {
                late = true;
                i = i + 3;
            } else if (s[i] === 'A') {
                absence++;
            }
        }

        return late && absence >= 2;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
