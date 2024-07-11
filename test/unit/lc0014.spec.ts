xdescribe('leetcode 14: longest common prefix', () => {
    function longestCommonPrefix(strs: string[]): string {
        if (!strs || strs.length === 0) {
            return '';
        }

        let index = 0;
        let prefix = '';
        while (true) {
            let currentPrefix = strs[0].charAt(index);
            let flag = true;
            for (let i = 0; i < strs.length; i++) {
                if (index == strs[i].length || strs[i].charAt(index) !== currentPrefix) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                prefix += currentPrefix;
            } else {
                break;
            }

            index++;
        }

        return prefix;
    }

    it('test case 1 Input: strs = ["flower","flow","flight"], Output: fl', () => {
        const strs = ['flower', 'flow', 'flight'];

        const output = longestCommonPrefix(strs);

        expect(output).toEqual('fl');
    });

    it('test case 2 Input: strs = ["dog","racecar","car"], Output: emptystring', () => {
        const strs = ['dog', 'racecar', 'car'];

        const output = longestCommonPrefix(strs);

        expect(output).toEqual('');
    });
});
