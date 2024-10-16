xdescribe('leetcode 800: description', () => {
    function similiarRGB(color: string): string {
        let a = color.substring(1, 3), b = color.substring(3, 5), c = color.substring(5, 7);
        return "#" + f(a) + f(b) + f(c);
    }

    function f(x: string) {
        let q = Number('0x'+x);
        q = q / 17 + (q % 17 > 8 ? 1 : 0);
        return  (17 * q).toString(16);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
