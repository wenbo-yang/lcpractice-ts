xdescribe('leetcode 522: longest uncommon sequence', () => {
    function findLUSlength(strs: string[]): number {
        let index = 0;
        let result = '';

        while(index < strs.length - 1) {
            if (!isSubseqeunceOfOthers(strs, index)) {
                result = strs[index].length > result.length ? strs[index] : result;
            }
            index++;
        }

        return result.length === 0 ? -1 : result.length; 
    };

    function isSubseqeunceOfOthers(strs: string[], index: number): boolean {
        for (let i = 0; i < strs.length; i++) {
            if (index === i) {
                continue;
            }
            else if (isSubseqeunceOf(strs, index, i)){  
                return true;
            }
        }

        return false;
    }
    
    function isSubseqeunceOf(strs: string[], index: number, i: number): boolean {
        if (strs[i] === strs[index]) {
            return true;
        }

        const shorter =  strs[index].length < strs[i].length ? strs[index] : strs[i];
        const longer = strs[index].length >= strs[i].length ? strs[index] : strs[i];

        let sI = 0;
        let lI = 0;

        while(sI < shorter.length && lI < longer.length) {
            if (shorter[sI] === longer[lI]) {
                sI++;
            }
            lI++;
        }

        return sI === shorter.length;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




