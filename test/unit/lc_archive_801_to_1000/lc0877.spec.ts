xdescribe('leetcode 877: stone game', () => {
    function stoneGame(piles: number[]): boolean {
        const sum = piles.reduce((a,b) => a + b);
        const mem = new Map<string, boolean>();
        return canWin(true, [0, 0], 0, piles.length - 1, piles, Math.ceil(sum/2), mem);
    };

    function canWin(isAlice: boolean, currentValue: number[], start: number, end: number, piles: number[], target: number, mem: Map<string, boolean>): boolean {
        if (start > end) {
            return currentValue[0] >= target;
        }

        if (currentValue[0] >= target) {
            return true;
        }

        if (mem.has(toKey(isAlice, currentValue, start, end))) {
            return mem.get(toKey(isAlice, currentValue, start, end)) || false;
        }

        let canAliceWin = false;
        if (isAlice) {
            canAliceWin = canWin(false, [currentValue[0] + piles[start], currentValue[1]], start + 1, end, piles, target, mem ) || canWin(false, [currentValue[0] + piles[end], currentValue[1]], start, end - 1, piles, target, mem);
        }
        else {
            canAliceWin = canWin(true, [currentValue[0], piles[start] + currentValue[1]], start + 1, end, piles, target, mem ) && canWin(true, [currentValue[0], piles[end]+ currentValue[1]], start, end - 1, piles, target, mem);
        }
        
        mem.set(toKey(isAlice, currentValue, start, end), canAliceWin);
        
        return canAliceWin;
    }

    function toKey(isAlice: boolean, currentValue: number[], start: number, end: number): string {
        return [isAlice, currentValue, [start, end]].join();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




