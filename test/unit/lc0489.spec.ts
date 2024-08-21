xdescribe('leetcode 489: ', () => {
    interface Robot {
        // returns true if next cell is open and robot moves into the cell.
        // returns false if next cell is obstacle and robot stays on the current cell.
        move(): boolean;
      
        // Robot will stay on the same cell after calling turnLeft/turnRight.
        // Each turn will be 90 degrees.
        turnLeft(): void;
        turnRight(): void;
      
        // Clean the current cell.
        clean(): void;
    }

    enum FACING {
        TOP = 'TOP',
        LEFT = 'LEFT',
        BOTTOM = 'BOTTOM',
        RIGHT = 'RIGHT',
    }

    function cleanRoom(room: number[][], row: number, col: number, robot: Robot): void {
        const facing: FACING = FACING.LEFT;
        const toBeCleaned = getToBeCleanedCoordinates(room);

        const visited = new Array<Array<boolean>>(room.length).fill([]).map(r => new Array<boolean>(room[0].length).fill(false));

        const currentVector = {row, col, facing};
        
        mapIsland(room, row, col, currentVector, visited, robot);
    }


    function mapIsland(room: number[][], row: number, col: number, currentVector: { row: number; col: number; facing: FACING; }, visited: boolean[][], robot: Robot) {
        if (row < 0 || row >= room.length || col < 0 || col >= room[0].length || visited[row][col] || room[row][col] === 0) {
            return;
        }

        visited[row][col] = true;
        let updatedFacing = moveToAdjacentCell(currentVector.row, currentVector.col, currentVector.facing, row, col, robot);
        robot.clean();
        currentVector.row = row;
        currentVector.col = col;
        currentVector.facing = updatedFacing;
        mapIsland(room, row - 1, col, currentVector, visited, robot);
        updatedFacing = moveToAdjacentCell(currentVector.row, currentVector.col, currentVector.facing, row, col, robot);
        currentVector.row = row;
        currentVector.col = col;
        currentVector.facing = updatedFacing;

        mapIsland(room, row + 1, col, currentVector, visited, robot);
        updatedFacing = moveToAdjacentCell(currentVector.row, currentVector.col, currentVector.facing, row, col, robot);
        currentVector.row = row;
        currentVector.col = col;
        currentVector.facing = updatedFacing;

        mapIsland(room, row, col - 1, currentVector, visited, robot);
        updatedFacing = moveToAdjacentCell(currentVector.row, currentVector.col, currentVector.facing, row, col, robot);
        currentVector.row = row;
        currentVector.col = col;
        currentVector.facing = updatedFacing;

        mapIsland(room, row, col + 1, currentVector, visited, robot);
        updatedFacing = moveToAdjacentCell(currentVector.row, currentVector.col, currentVector.facing, row, col, robot);
        currentVector.row = row;
        currentVector.col = col;
        currentVector.facing = updatedFacing;
    }

    function getToBeCleanedCoordinates(room: number[][]) {
        const set = new Set<string>();
        
        for (let i = 0; i < room.length; i++) {
            for (let j = 0; j < room.length; j++) {
                if (room[i][j] === 1) {
                    set.add([i,j].join());
                }
            }
        }

        return set;
    }

    function moveToAdjacentCell(row: number, col: number, currentFacing: FACING, targetRow: number, targetCol: number, robot: Robot): FACING {
        if (row === targetRow && col === targetCol) {
            return currentFacing;
        }

        let updatedFacing = currentFacing;
        if (isMovingTop(row, targetRow)) {
            if (currentFacing === FACING.LEFT) {
                robot.turnRight();
            }
            else if (currentFacing === FACING.RIGHT){
                robot.turnLeft();
            }
            else if (currentFacing === FACING.BOTTOM) {
                robot.turnLeft();
                robot.turnLeft();
            }

            updatedFacing = FACING.TOP;
        }

        if (isMovingBottom(row, targetRow)) {
            if (currentFacing === FACING.LEFT) {
                robot.turnLeft();
            }
            else if (currentFacing === FACING.RIGHT){
                robot.turnRight();
            }
            else if (currentFacing === FACING.TOP) {
                robot.turnRight();
                robot.turnRight();
            }

            updatedFacing = FACING.BOTTOM;
        }


        if (isMovingLeft(col, targetCol)) {
            if (currentFacing === FACING.TOP) {
                robot.turnLeft();
            }
            else if (currentFacing === FACING.BOTTOM) {
                robot.turnRight();
            }
            else if (currentFacing === FACING.RIGHT){
                robot.turnLeft();
                robot.turnLeft();
            }

            updatedFacing = FACING.LEFT;
        }

        if (isMovingRight(col, targetCol)) {
            if (currentFacing === FACING.TOP){
                robot.turnRight();
            }
            else if (currentFacing === FACING.BOTTOM) {
                robot.turnLeft();
            }
            else if (currentFacing === FACING.LEFT) {
                robot.turnRight();
                robot.turnRight();
            }

            updatedFacing = FACING.RIGHT;
        }

        robot.move();

        return updatedFacing;
    }

    function isMovingTop(row: number, targetRow: number): boolean {
        return targetRow < row;
    }
    
    function isMovingBottom(row: number, targetRow: number): boolean {
        return targetRow > row;
    }

    function isMovingLeft(col: number, targetCol: number): boolean {
        return targetCol < col;
    }

    function isMovingRight(col: number, targetCol: number): boolean {
        return targetCol > col;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});







