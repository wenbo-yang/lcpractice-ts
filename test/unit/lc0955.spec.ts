xdescribe('leetcode 955: deleted columns to make sorted II', () => {
    function minDeletionSize(strs: string[]): number {
        let minDeletions: number = 0;
        if (!strs || strs.length <= 1) {
            return 0;
        }
    
        const numOfStrings: number = strs.length;
        const stringLength: number = strs [0].length;
    
        const sorted: boolean[] = new Array(numOfStrings).fill(false);
    
        for (let j = 0; j < stringLength; j++) {
            let needToDeleteColumn: boolean = false;
    
            for (let i = 0; i < numOfStrings - 1; i++) {
                if (!sorted[i] && strs[i].charAt(j) > strs[i + 1].charAt(j)) {
                    needToDeleteColumn = true;
                    break; 
                }
            }
    
            if (needToDeleteColumn) {
                minDeletions++;
                continue;
            }
          
            for (let i = 0; i < numOfStrings - 1; i++) {
                if (strs[i].charAt(j) < strs[i + 1].charAt(j)) {
                    sorted[i] = true;
                }
            }
        }
    
        return minDeletions;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
