xdescribe('leetcode 9: palidrome numner', () =>{
    function isPalindrome(x: number): boolean {
        if (x < 0) {
            return false;
        }
        
        const s = x.toString();
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            if (s.charAt(l++) !== s.charAt(r--)) {
                return false;
            }
        }

        return true;
    };

    it('test case 1 Input: x = 121, Output: true', () =>{
        const output = isPalindrome(121);
        expect(output).toBeTruthy();
    });

    it('test case 2 Input: x = -121, Output: false', () =>{
        const output = isPalindrome(-121);
        expect(output).toBeFalsy();
    });

    it('test case 3 Input: x = 10, Output: false', () =>{
        const output = isPalindrome(10);
        expect(output).toBeFalsy();
    });
});