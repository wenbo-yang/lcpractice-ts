xdescribe('leetcode 1328: break a palidrome', () => {
    function breakPalindrome(palindrome: string): string {
        const arr = palindrome.split('');

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 'a') {
                arr[i] = 'a'
                return arr.join('');
            }
        }

        return arr[arr.length - 1] = 'b';
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
