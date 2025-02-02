xdescribe('leetcode 1392: longest happy prefix', () => {
    function longestPrefix(s: string): string {
        const lengthOfString: number = s.length;

        for (let i = lengthOfString - 1; i >= 0; i--) {
            if (s.slice(0, i) === s.slice(lengthOfString - i)) {
                
                return s.slice(0, i);
            }
        }
    
        return '';
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
