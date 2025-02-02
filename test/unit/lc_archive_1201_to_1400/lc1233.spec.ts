xdescribe('leetcode 1233: remove sub folders from the file systems', () => {
    // sort
    function removeSubfolders(folder: string[]): string[] {
        folder.sort();
        let l = 0;
        
        for (let i = 1; i < folder.length; i++) {
            if (folder[i].startsWith(folder[l]) && folder[i][folder[l]] === '/') {
                folder[i] = '';        
            }
            else {
                l = i;
            }
        }

        return folder.filter(n => n !== '');
    };

    // solution 2 union find

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
