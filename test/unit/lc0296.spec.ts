import {Queue} from './commonLibs';

xdescribe('leetcode 296: description', () => {
    function bestMeetingPoint(grid: number[][]): number {        
        let m = grid.length, n = grid[0].length;
        const rows: number[] = [];
        const cols: number[] = [];
        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    rows.push(i);
                    cols.push(j);
                }
            }
        }
        cols.sort((a,b) => a - b);
        let i = rows[rows.length >> 1];
        let j = cols[cols.length >> 1];
        return f(rows, i) + f(cols, j);
    }

    function f(arr: number[], x: number): number {
        let s: number = 0;
        for (const v of arr) {
            s += Math.abs(v - x);
        }
        return s;
    }

    function initializeQueue(queue: Queue<{userCount: number, distance: number, r: number, c: number}>, homeCoords: number[][], top: number, left: number) {
        for (const home of homeCoords) {
            const r = home[0] - top;
            const c = home[1] - left;

            queue.enque({userCount: 1, distance: 0, r, c});
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


