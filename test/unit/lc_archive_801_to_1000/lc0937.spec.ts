xdescribe('leetcode 937: recorder data in log files', () => {
    function reorderLogFiles(logs: string[]): string[] {
        const isDigit = (char: string): boolean => char >= '0' && char <= '9';

        return logs.sort((log1, log2) => {
            const lastCharLog1 = log1[log1.length - 1];
            const lastCharLog2 = log2[log2.length - 1];
    
            if (isDigit(lastCharLog1) && isDigit(lastCharLog2)) {
                return 0;
            }
    
            if (isDigit(lastCharLog1)) {
                return 1;
            }
    
            if (isDigit(lastCharLog2)) {
                return -1;
            }
    
            const contentLog1 = log1.split(' ').slice(1).join(' ');
            const contentLog2 = log2.split(' ').slice(1).join(' ');
    
            if (contentLog1 === contentLog2) {
                return log1.localeCompare(log2);
            }
    
            return contentLog1.localeCompare(contentLog2);
        });
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
