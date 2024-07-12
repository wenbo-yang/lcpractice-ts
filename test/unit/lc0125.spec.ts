xdescribe('leetcode 125: valid palidrome', () => {
    function isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            const testL = s[l].toLocaleLowerCase();
            const testR = s[r].toLocaleLowerCase();

            if (!isLetter(testL)) {
                l++;
                continue;
            }

            if (!isLetter(testR)) {
                r--;
                continue;
            }

            if (testR !== testL) {
                return false;
            }

            r--;
            l++;
        }

        return true;
    }

    function isLetter(c: string) {
        const offset = c.charCodeAt(0) - 'a'.charCodeAt(0);
        return offset >= 0 && offset <= 25;
    }

    it('test case 1 Inputs = "A man, a plan, a canal: Panama" output true ', () => {
        const result = isPalindrome('A man, a plan, a canal: Panama');
        expect(result).toBeTruthy();
    });
});
