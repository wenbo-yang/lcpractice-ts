xdescribe('leetcode 688: knight moves', () => {
    function knightProbability(n: number, k: number, row: number, column: number): number {
        // 
        const coor: number[][][] = [[[row, column]]];
        move(n, k, coor) 

        let inBoundCount = 0;

        for (const c of coor[coor.length - 1]) {
            if (isInBound(c, n)) {
                inBoundCount++;
            } 
        }

        return inBoundCount / coor[coor.length - 1].length;
    };

    function move(n: number, k: number, coor: number[][][]) {
        if (k < 0) {
            return;
        }

        const prevMoves = coor[coor.length - 1];

        const currentMoves: number[][] = [];

        for (const move of prevMoves) {
            if (isInBound(move, n)) {
                const knightCoor = getMoves(move);

                for(const c of knightCoor) {
                    currentMoves.push(c);
                }
            }
        }

        coor.push(currentMoves);

        move(n, k--,  coor);
    }

    function getMoves(move: number[]) {
        const moves = [[-1, -2], [-1, 2], [-2, 1], [-2, -1], [1, -2], [1, 2], [2, -1], [2, 1]];
        const result: number[][] = [];

        for (const m of moves) {
            result.push([move[0] + m[0], move[1] + m[1]]);
        }

        return result;
    }


    function isInBound(move: number[], n: number) {
        return move[0] < n && move[0] >=0 && move[1] < n && move[1] >= 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






