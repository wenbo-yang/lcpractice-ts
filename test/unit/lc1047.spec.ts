xdescribe('leetcode 1047: remove all adjacent duplicates in string', () => {
    function removeDuplicates(s: string): string {
        const stack: string[] = [];
        for (const character of s) {
            if (stack.length > 0 && stack[stack.length - 1] === character) {
                stack.pop();
            } else {
                stack.push(character);
            }
        }
      
        return stack.join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
