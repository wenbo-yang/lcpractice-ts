import { Queue } from './commonLibs';

xdescribe('leetcode 1138: alphabet board path', () => {
    function alphabetBoardPath(target: string): string {
        const board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z    '];
        let queue = new Queue<{r:number, c: number, path: string[]}>();
        const visited = new Array<boolean[]>(board.length).fill([]).map(r => new Array<boolean>(board[0].length).fill(false));

        queue.enque({r: 0, c: 0, path: []});

        const result: string[] = [];
        for (let i = 0; i < target.length; i++) {
            while(queue.length) {
                const top = queue.deque();
                if (!top) break;

                visited[top.r][top.c] = true;
                const path = top.path;

                if (board[top.r][top.c] === target[i]) {
                    path.push('!');
                    result.concat(Array.from(path));
                    queue = new Queue<{r:number, c: number, path: string[]}>();
                    queue.enque({r: top.r, c: top.c, path: []});
                    break;
                }

                const neighbors = getNeighbors(board, top, visited);

                for (const n of neighbors) {
                    const path = Array.from(top.path);
                    path.push(n.direction);
                    queue.enque({r: n.r, c: n.c, path});
                }
            }
        }

        return result.join('');
    };

    function getNeighbors(board: string[], top: { r: number; c: number; path: string[]; }, visited: boolean[][]): {r: number, c: number, direction: string}[] {
        const neighbors: {r: number, c: number, direction: string}[] = [];
        const r = top.r;
        const c = top.c;
        if (isValid(board, visited, r, c - 1)) {
            neighbors.push({r: r, c: c - 1, direction: 'U'});
        }
        if (isValid(board, visited, r, c + 1)) {
            neighbors.push({r: r, c: c + 1, direction: 'D'});
        }
        if (isValid(board, visited, r - 1, c)) {
            neighbors.push({r: r - 1, c: c, direction: 'L'});
        }
        if (isValid(board, visited, r + 1, c)) {
            neighbors.push({r: r + 1, c: c, direction: 'R'});
        }

        return neighbors;
    }

    function isValid(board: string[], visited: boolean[][], r: number, c: number): boolean {
        return r >= 0 && r < board.length && c >= 0 && c < board.length && !visited[r][c] && board[r][c] !== ' ';
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






