xdescribe('leetcode 944: delete columns to make sorted', () => {
    function minDeletionSize(strs: string[]): number {
        let columnsToDelete = 0;
    
        for (let j = 0; j < strs[i].length; j++) {
            for (let i = 1; i < strs.length; i++) {
                if (strs[i][j] < strs[i - 1][j]) {
                    columnsToDelete++;
                }
            }
        }

        return columnsToDelete;
        
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
