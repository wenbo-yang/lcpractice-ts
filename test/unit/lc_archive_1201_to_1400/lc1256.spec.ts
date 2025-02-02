xdescribe('leetcode 1256: encode number', () => {
    function encode(num: number): string {
        ++num;
        let s = num.toString(2);
        return s.slice(1);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
