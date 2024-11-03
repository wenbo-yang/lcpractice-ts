xdescribe('leetcode 925: long pressed name', () => {
    function isLongPressedName(name: string, typed: string): boolean {
        let l = 0;
        let r = 0;

        while (l < name.length && r < typed.length) {
            if (name[l] === typed[r]) {
                l++;
                r++;
                continue;
            }
            else if (typed[r] === typed[l - 1]){
                r++;
            }
            else {
                return false;
            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
