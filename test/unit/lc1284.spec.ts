xdescribe('leetcode 1284: minimum number flips to convert binary matrix to zero matrix', () => {
    interface Matrix extends Array<Array<number>> {}

    let rows: number;
    let cols: number;

    function matToBit(mat: Matrix): number {
        let state = 0;
        for (let i = 0; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                if (mat[i][j]) {
                    state |= (1 << (i * cols + j));
                }
            }
        }
        return state;
    }

    function flipBits(state: number, cellRow: number, cellCol: number): number {
        const directionDeltas = [0, 1, 0, -1, 0];
        for (let k = 0; k < 5; ++k) {
            const x = cellRow + directionDeltas[k]; // Row index after applying delta
            const y = cellCol + directionDeltas[k + 1]; // Col index after applying delta
          
            // Check for valid cell (inside boundary)
            if (x >= 0 && x < rows && y >= 0 && y < cols) {
                state ^= 1 << (x * cols + y); // XOR to flip the bit
            }
        }
        return state;
    }
    
    function minFlips(mat: number[][]): number {
        rows = mat.length; 
        cols = mat[0].length; 
        const initialState = matToBit(mat); 
        const statesQueue: number[] = [initialState];
        const visited = new Set<number>([initialState]);
        let minFlipsCount = 0;

        while (statesQueue.length > 0) {
            const queueSize = statesQueue.length;
            for (let t = 0; t < queueSize; ++t) {
                const currentState = statesQueue.shift()!;
                if (currentState === 0) return minFlipsCount; 

                for (let i = 0; i < rows; ++i) {
                    for (let j = 0; j < cols; ++j) {
                        const nextState = flipBits(currentState, i, j);

                        if (!visited.has(nextState)) {
                            visited.add(nextState); 
                            statesQueue.push(nextState); 
                        }
                    }
                }
            }
            minFlipsCount++;
        }

        return -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
