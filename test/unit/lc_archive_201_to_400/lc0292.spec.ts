xdescribe('leetcode 292: nim game', () => {
    function canWinNim(n: number): boolean {
        return canWinNimHelper(n, true);
    }

    function canWinNimHelper(n: number, isMyTurn: boolean): boolean {
        if (n <= 3) {
            return isMyTurn;
        }

        return canWinNimHelper(n - 1, !isMyTurn) || canWinNimHelper(n - 2, !isMyTurn) || canWinNimHelper(n - 3, !isMyTurn);
    }

    function canWinNimFast(n: number) {
        return n % 4 !== 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
