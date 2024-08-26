xdescribe('leetcode 499: maze III', () => {
    function canSolveMaze(mat: number[][], ball: number[], hole: number[]): string {
        // bottom, left, right, up
        const updatedMat = new Array<Array<number>>(mat.length + 2).fill([]).map(r => new Array<number>(mat[0].length + 2).fill(1));
        for(let i = 1; i < updatedMat.length - 1; i++) {
            for (let j = 1; j < updatedMat[0].length - 1; i++) {
                updatedMat[i][j] = mat[i - 1][j - 1];
            }
        }
        ball = [ball[0] + 1, ball[1] + 1];
        hole = [hole[0] + 1, hole[1] + 1];


        const result: string[] = [];
        const current: string[] = [];
        
        const visited = new Array<Array<{l:boolean, r:boolean, b:boolean, u:boolean}>>(updatedMat.length).fill([]).map(r => new Array<{l:boolean, r:boolean, d:boolean, u:boolean}>(updatedMat[0].length).fill({l:false, r:false, b:false,u:false}));
        const directions =  {
            down: [-1, 0],
            left: [0, -1],
            right: [0, 1],
            up: [1, 0]
        };

        return (canSolveMazeHelper(updatedMat, Array.from(ball), hole, current, result, directions.down, directions, visited) || 
        canSolveMazeHelper(updatedMat, Array.from(ball), hole, current, result, directions.left, directions, visited) || 
        canSolveMazeHelper(updatedMat, Array.from(ball), hole, current, result, directions.right, directions, visited) || 
        canSolveMazeHelper(updatedMat, Array.from(ball), hole, current, result, directions.up, directions, visited))
         ? result.sort((a,b) => a.length - b.length)[0] : '';
    }

    function canSolveMazeHelper(mat: number[][], ball: number[], hole: number[], current: string[], result: string[], direction: number[], directions: { down: number[]; left: number[]; right: number[]; up: number[]; }, visited: { l: boolean; r: boolean; d: boolean; u: boolean; }[][]) {
        if (ball[0] < 0 || ball[0] >= mat.length || ball[1] < 0 || ball[1] >= mat[0].length || mat[ball[0]][ball[1]] === 1 || hasVisited(visited, ball, direction)) {
            return false;
        }

        const originalBall = Array.from(ball);

        do {
            setVisited(visited, ball, direction);
        } while (rollToEnd(ball, hole, direction, mat));

        if (isBallInHole(ball, hole)) {
            result.push(Array.from(current).join(''));
            return true;
        }

        if (!hasMoved(originalBall, ball)) {
            return false;
        }

        setCurrentRecord(current, direction);
        
        return canSolveMazeHelper(mat, Array.from(ball), hole, Array.from(current), result, directions.down, directions, visited) || 
        canSolveMazeHelper(mat, Array.from(ball), hole, Array.from(current), result, directions.left, directions, visited) || 
        canSolveMazeHelper(mat, Array.from(ball), hole, Array.from(current), result, directions.right, directions, visited) || 
        canSolveMazeHelper(mat, Array.from(ball), hole, Array.from(current), result, directions.up, directions, visited);
    }


    function hasMoved(originalBall: number[], ball: number[]) {
        return ball[0] !== originalBall[0] || ball[1] !== originalBall[1];
    }


    function isBallInHole(ball: number[], hole: number[]): boolean {
        return ball[0] == hole[0] && ball[1] === hole[1];
    }
    

    function rollToEnd(ball: number[], hole, direction: number[], mat: number[][]): boolean {
        if (ball[0] === hole[0] && ball[1] === hole[1] ) {
            return false;
        }
        
        if (mat[ball[0] + direction[0]][ball[1] + direction[1]] !== 1) {
            ball[0] += direction[0];
            ball[1] += direction[1];
            return true;
        }

        return false;
    }

    function setVisited(visited: { l: boolean; r: boolean; d: boolean; u: boolean; }[][], ball: number[], direction: number[]): boolean {
        if (isLeft(direction)) {
            visited[ball[0]][ball[1]].l = true; 
        }

        if (isRight(direction)) {
            visited[ball[0]][ball[1]].r = true; 
        }

        if (isUp(direction)) {
            visited[ball[0]][ball[1]].u = true; 
        }

        if (isDown(direction)) {
            visited[ball[0]][ball[1]].d = true; 
        }
    }

    function setCurrentRecord(current: string[], direction: number[]) {
        if (isLeft(direction)) {
            current.push('l');
        }

        if (isRight(direction)) {
            current.push('r');
        }

        if (isUp(direction)) {
            current.push('u');
        }

        if (isDown(direction)) {
            current.push('d');
        }
    }

    function hasVisited(visited: { l: boolean; r: boolean; d: boolean; u: boolean; }[][], ball: number[], direction: number[]): boolean {
        if (isLeft(direction)) {
            return visited[ball[0]][ball[1]].l;
        }

        if (isRight(direction)) {
            return visited[ball[0]][ball[1]].r;
        }

        if (isUp(direction)) {
            return visited[ball[0]][ball[1]].u;
        }

        if (isDown(direction)) {
            return visited[ball[0]][ball[1]].d;
        }

        return true;
    }

    function isLeft(direction: number[]): boolean {
       return direction[1] === -1;
    }

    function isRight(direction: number[]): boolean {
        return direction[1] === 1;
    }

    function isUp(direction: number[]): boolean {
        return direction[0] === -1;
    }

    function isDown(direction: number[]): boolean {
        return direction[0] === 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});










