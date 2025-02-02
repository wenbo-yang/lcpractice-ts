xdescribe('leetcode 1221: split a string in balanced strings', () => {
    function balancedStringSplit(s: string): number {
        let lCount = 0;
        let rCount = 0;
        let result = 0;
        for(let i = 0; i < s.length; i++) {
            if (s[i] === 'L') {
                lCount++;
            }
            else {
                rCount++;
            }

            if (lCount === rCount) {
                rCount = lCount = 0; 
                result++;
            }
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
