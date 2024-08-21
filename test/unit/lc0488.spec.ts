xdescribe('leetcode 488: zuma game', () => {
    function findMinStep(board: string, hand: string): number {
        const mem = new Map<string, number>();
        
        return findMinStepHelper(tryReduce(board), hand, 0, mem);
    };

    function findMinStepHelper(board: string, hand: string, currentStep: number, mem: Map<string, number>): number {
        if (board === '') {
            return currentStep;
        }

        if (mem.has([board,hand].join())) {
            return mem.get([board,hand].join()) || Number.MAX_SAFE_INTEGER;
        }

        let min = 0;
        for (let i = 0; i < hand.length; i++) {
            const set = new Set<string>();
            for (let j = 0; j < board.length; j++) {
                const updatedBoard = tryReduce(insert(board, j, hand[i]));
                set.add(updatedBoard);
            }

            const updatedHand = updateHand(hand, i);

            for (const updatedBoard of set.values()) {
                min = Math.min(min, findMinStepHelper(updatedBoard, updatedHand, currentStep + 1, mem));
            }            
        }

        mem.set([board,hand].join(), min);
        return min;
    }

    function insert(board: string, j: number, char: string): string {
        return board.substring(0, j) + char + board.substring(j+1);
    }

    function tryReduce(board: string): string {
        let l = 0;
        let r = 0;
        const reduce: number[][] = [];
        while (r < board.length) {
            if (board[r] === board[l]) {
                r++;
            }
            else {
                if (r - l >= 3) {
                    reduce.push([l, r - 1]);
                }
                l = r;
            }
        }

        if (board[r] === board[l]) {
            if (r - l >= 3) {
                reduce.push([l, r - 1]);
            }
        }
        
        const updatedBoard: string[] = [];
        
        for (let i = 0; i < board.length; i++) {
            if (!partOfReducedSection(reduce, i)) {
                updatedBoard.push(board[i]);    
            }
        }

        return updatedBoard.join('');
    }

    function partOfReducedSection(reduce: number[][], i: number) {
        return reduce.find(it => i >= it[0] && i <= it[i]) === undefined;
    }

    function updateHand(hand: string, i: number) {
        return hand.substring(0, i) + hand.substring(i+1);
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});








