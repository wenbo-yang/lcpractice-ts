xdescribe('leetcode 777: swap adjacent lr string', () => {
    function canTransform(start: string, end: string): boolean {
        // RXXL => XRXL => XXRL
        // XRLX

        let n = start.length;
        let i = 0, j = 0;
        while (true) {
            while (i < n && start[i] == 'X') ++i;
            while (j < n && end[j] == 'X') ++j;
            if (i == n && j == n) return true;
            if (i == n || j == n || start[i] != end[j]) return false;
            if (start[i] == 'L' && i < j) return false;
            if (start[i] == 'R' && i > j) return false;
            ++i;
            ++j;
        }

        return false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
