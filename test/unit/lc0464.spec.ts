xdescribe('leetcode 464: can I win', () => {
    function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
        if (((maxChoosableInteger + 1) * maxChoosableInteger) / 2 < desiredTotal) {
            return false;
        }

        let i = 1;
        const choosableSet = new Set<number>(new Array<number>(maxChoosableInteger).fill(0).map((it) => it + i++));
        const mem = new Map<string, boolean>();

        return canWinHelper(desiredTotal, choosableSet, maxChoosableInteger, mem, true);
    }

    function canWinHelper(desiredTotal: number, choosableSet: Set<number>, maxChoosableInteger: number, mem: Map<string, boolean>, isMyTurn: boolean): boolean {
        if (mem.has(toKey(desiredTotal, choosableSet))) {
            return mem.get(toKey(desiredTotal, choosableSet)) || false;
        }

        if (desiredTotal <= maxOf(choosableSet)) {
            mem.set(toKey(desiredTotal, choosableSet), isMyTurn);
            return isMyTurn;
        }

        let canWin = false;
        for (let i = maxChoosableInteger; i >= 1; i--) {
            if (choosableSet.has(i)) {
                choosableSet.delete(i);
                canWin = canWin || canWinHelper(desiredTotal - i, choosableSet, maxChoosableInteger, mem, !isMyTurn);
                choosableSet.add(i);
            }
        }

        mem.set(toKey(desiredTotal, choosableSet), canWin);

        return canWin;
    }

    function maxOf(choosableSet: Set<number>): number {
        return Math.max(...Array.from(choosableSet.values()));
    }

    function toKey(desiredTotal: number, choosableSet: Set<number>): string {
        return [desiredTotal, ...Array.from(choosableSet.values()).sort((a, b) => a - b)].join();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
