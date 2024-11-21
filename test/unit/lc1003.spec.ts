xdescribe('leetcode 1003: check word valid after subs', () => {
    function isValid(s: string): boolean {
        if (s.length % 3 !== 0) {
            return false;
        }
      
        const tempStack: string[] = [];
      
        for (const char of s) {
            tempStack.push(char);
          
            if (tempStack.slice(-3).join('') === 'abc') {
                tempStack.splice(-3);
            }
        }
      
        return tempStack.length === 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
