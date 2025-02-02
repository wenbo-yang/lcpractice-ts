xdescribe('leetcode 1209: remove all adjacent duplicates in string II', () => {
    function removeDuplicates(s: string, k: number): string {
        let charStack: Array<{ character: string; count: number }> = [];

        for (let currentChar of s) {
            if (charStack.length > 0 && charStack[charStack.length - 1].character === currentChar) {
                charStack[charStack.length - 1].count++;
                if (charStack[charStack.length - 1].count === k) {
                    charStack.pop();
                }
            } else {
                charStack.push({ character: currentChar, count: 1 });
            }
        }
    
        let result: string = '';
    
        for (let { character, count } of charStack) {
            result += character.repeat(count);
        }
    
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
