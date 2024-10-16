xdescribe('leetcode 680: valid palindrome', () => {
    function validPalindrome(s: string): boolean {
        let ignoredOneChar: boolean = false;

        let l = 0;
        let r = s.length;

        while(l < r) {
            if (s[l] !== s[r] && ignoredOneChar) {
                return false;
            }
            
            if (s[l] !== s[r]) {
                if (s[l + 1] === s[r]) {
                    l++;
                }
                else {
                    r--;
                }
                ignoredOneChar = true;
                continue;
            }

            l++;
            r--;
        }

        return true;
    };

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
