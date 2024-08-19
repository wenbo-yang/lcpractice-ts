xdescribe('leetcode 479: largestPalindrome product', () => {
    function largestPalindrome(n: number): number {
        let upper = Math.pow(10, n) - 1, lower = upper / 10;
        for (let i = upper; i > lower; i--) {
            const t = i.toString();
            let p = Number(t + t.split('').reverse().join(''));
            for (let j = upper; j * j > p; --j) {
                if (p % j == 0) return p % 1337;
            }
        }
        return 9;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
