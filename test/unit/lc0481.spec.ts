xdescribe('leetcode 481: magical string', () => {
    function magicalString(n: number): number {
        let s = [1, 2, 2];
        let i = 2;
        while (s.length < n) {
            const array = new Array<number>(s[s.length - 1] ^ 3).fill(s[i++]);
            s.concat(array);
        }
        return s.filter((c) => c === 1).length;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
