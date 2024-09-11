xdescribe('leetcode 409: longest palindrome', () => {
    function longestPalindrome(s: string): number {
        let longest = 0;
        const evenLettersMap = new Array<boolean>(26).fill(true);

        for (const char of s) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            evenLettersMap[index] = !evenLettersMap[index];

            if (evenLettersMap[index]) {
                longest += 2;
            }
        }

        const hasLeftOverOddLetters = evenLettersMap.find((c) => c === false);

        return hasLeftOverOddLetters ? longest + 1 : longest;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
