xdescribe('leetcode 1033: move stones until consecutive', () => {
    function numMovesStones(a: number, b: number, c: number): number[] {
        const left = Math.min(a, Math.min(b, c));
        const right = Math.max(a, Math.max(b, c));
        const middle = a + b + c - left - right;
    
        let minMoves = 0; 
        let maxMoves = 0; 
    
        if (right - left > 2) {
            minMoves = (middle - left < 3 || right - middle < 3) ? 1 : 2;
            maxMoves = right - left - 2;
        }
    
        return [minMoves, maxMoves];
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
