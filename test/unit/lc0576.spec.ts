import { Queue } from "./commonLibs";

xdescribe('leetcode 576: out of boundary path', () => {
    function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
        let passes = 0;

        
        const positions = new Queue<{r: number, c: number, currMove: number}>();
        positions.enque({r: startRow, c: startColumn, currMove: 0});

        while (true) {
            const top = positions.deque();
            if ((top?.currMove || Number.MAX_SAFE_INTEGER) >= maxMove) {
                break;
            }

            while(top) {
                if (top.r === 0 || top.r === m - 1 || top.c === 0 || top.c === n - 1) {
                    passes++;
                }
                
                if (top.r > 0) {
                    positions.enque({r: top.r - 1, c: top.c, currMove: top.currMove + 1});
                }

                if (top.r < m - 1) {
                    positions.enque({r: top.r + 1, c: top.c, currMove: top.currMove + 1});
                }

                if (top.c > 0 ) {
                    positions.enque({r: top.r, c: top.c - 1, currMove: top.currMove + 1});
                }

                if (top.c < n - 1) {
                    positions.enque({r: top.r, c: top.c + 1, currMove: top.currMove + 1});
                }
            }

        }

        return passes;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
