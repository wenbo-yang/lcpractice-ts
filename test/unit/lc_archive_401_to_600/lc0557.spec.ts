xdescribe('leetcode 557: reverse word in a string ', () => {
    function reverseWords(s: string): string {
        const sArr = s.split(' ');

        for (let i = 0; i < sArr.length; i++) {
            sArr[i] = reverseString(sArr[i]);
        }

        return sArr.join(' ');
    }

    function reverseString(s: string): string {
        return s.split('').reverse().join('');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
