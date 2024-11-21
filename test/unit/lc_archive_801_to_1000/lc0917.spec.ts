xdescribe('leetcode 917: reverse only letters', () => {
    function reverseOnlyLetters(s: string): string {
        const result: string[] = [];
        for (const c of s) {
            if (isLetter(c)) {
                if (c.toLowerCase() === c) {
                    result.push(c.toUpperCase());
                }
                else {
                    result.push(c.toLowerCase());
                }
            }
            else {
                result.push(c);
            }
        }

        return result.join('');
    };

    function isLetter(c: string): boolean {
        return !(c.toLowerCase() === c && c.toUpperCase() === c);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
