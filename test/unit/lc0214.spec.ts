xdescribe('leetcode 214: shortest palindrome', () => {
    function shortestPalindrome(s: string): string {

        let reverse = s.split('').reverse();

        let result: string = '';
        
        while(reverse.length > 0) {
            if (isPalindrome(reverse.join('') + s)) {
                result = reverse.join('') + s;
            }
            reverse.pop();
        };

        return result;
    };

    function isPalindrome(s: string) {
        let l = 0; 
        let r = s.length - 1;
        while(l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
    

    it('test case 1 Input: s= "aacecaaa",  output aaacecaaa ', () => {
        expect(shortestPalindrome('aacecaaa')).toEqual('aaacecaaa');
    });
});

