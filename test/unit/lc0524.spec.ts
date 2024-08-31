xdescribe('leetcode 524: longest word through deleting', () => {
    function findLongestWord(s: string, dictionary: string[]): string {
        dictionary.sort((a,b) => b.length - a.length);
        const first = dictionary.findIndex(w => s.length >= w.length);

        if (first !== -1) {
            for(let i = first; i < dictionary.length; i++) {
                if (isSubsequenceOf(s, dictionary[i])) {
                    return dictionary[i]
                }
            }
        }

        return "";

    };

    function isSubsequenceOf(s: string, w: string) {
        let iW = 0;
        let iS = 0;

        while (iW < w.length && iS < s.length) {
            if (w[iW] === s[iS]) {
                iW++;
            }
            iS++;
        }

        return iW === w.length;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

