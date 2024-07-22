xdescribe('leetcode 58: Length of Last Word', () => {
    function lengthOfLastWord(s: string): number {
        let r = s.length - 1;
        while (r >= 0 && s.charAt(r) === ' ') {
            r--;
        }

        let l = r;
        while (l >= 0 && s.charAt(l) !== ' ') {
            l--;
        }

        return r === -1 ? 0 : r - l;
    }

    it('test case 1 Input: s = "Hello World", output 5', () => {
        const s = 'Hello World';
        const result = lengthOfLastWord(s);
        expect(result).toEqual(5);
    });
});
