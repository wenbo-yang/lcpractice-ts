import {Queue} from './commonLibs';

xdescribe('leetcode 1263: min moves to move a box to target location', () => {
    function minPushBox(grid: string[][]): number {
        const queue = new Queue<{box: [number, number], keeper: [number, number], depth: number}>()
        const {box, keeper} = getBoxAndKeeperLocation(grid);
        grid[box[0]][box[1]] = '.'
        queue.enque({box, keeper, depth: 0});
        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));
        while (queue.length) {
            const top = queue.deque()!;
            if (isBoxAtTarget(grid, top.box)) {
                return top.depth;
            } 
            
            visited[box[0]][box[1]] = true;

            const locations = getNextValidBoxLocations(top, grid, visited);

            for (const loc of locations) {
                queue.enque({box: [loc.box[0], loc.box[1],], keeper: [loc.keeper[0], loc.keeper[1]], depth: top.depth + 1});
            }

        }

        return -1;
    };

    function getNextValidBoxLocations(top: { box: [number, number]; keeper: [number, number]; depth: number; }, grid: string[][], visited: boolean[][]): {box: [number, number], keeper: [number, number]}[] {
        const validMoves :{box: [number, number], keeper: [number, number]}[]= [];

        if (canMoveUp(top.box, top.keeper, grid, visited)) {
            validMoves.push({box: [top.box[0] - 1, top.box[1]], keeper: [top.box[0], top.box[1]]});
        }

        if (canMoveDown(top.box, top.keeper, grid, visited)) {
            validMoves.push({box: [top.box[0] + 1, top.box[1]], keeper: [top.box[0], top.box[1]]});
        }


        if (canMoveLeft(top.box, top.keeper, grid, visited)) {
            validMoves.push({box: [top.box[0], top.box[1] - 1], keeper: [top.box[0], top.box[1]]});
        }


        if (canMoveRight(top.box, top.keeper, grid, visited)) {
            validMoves.push({box: [top.box[0], top.box[1] + 1], keeper: [top.box[0], top.box[1]]});
        }

    }

    function canKeeperMoveTo(r: number, c: number, box: [number, number], keeper: [number, number], grid: string[][], visited: boolean[][]): boolean {
        if (grid[r][c] !== '.') {
            return false;
        }
        
        let kr = keeper[0];
        let kc = keeper[1];
        let br = box[0];
        let bc = box[1];
        if (kr < 0 || kr >= grid.length || kc < 0 || kc >= grid[0].length || (kr === br && kc === bc) || visited[kr][kc]) {
            return false;
        }

        visited[kr][kc] = true;

        if (kr === r && kc === c) {
            return true;
        }

        return canKeeperMoveTo(r, c, box, [kr + 1, kc], grid, visited) || 
        canKeeperMoveTo(r, c, box, [kr - 1, kc], grid, visited) || 
        canKeeperMoveTo(r, c, box, [kr, kc + 1], grid, visited) || 
        canKeeperMoveTo(r, c, box, [kr, kc - 1], grid, visited);
    }


    function isValidTargetLocation(r: number, c: number, grid: string[][], visited: boolean[][]): boolean {
        return (grid[r] || [])[c] === '.' && (visited[r] || [])[c] !== false
    }
    
    function canMoveUp(box: [number, number], keeper: [number, number], grid: string[][], visited: boolean[][]) {
        return isValidTargetLocation(box[0] - 1, box[1], grid, visited) && canKeeperMoveTo(box[0] + 1, box[1], box, keeper, grid, new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false)));
    }
    
    function canMoveDown(box: [number, number], keeper: [number, number], grid: string[][], visited: boolean[][]) {
        return isValidTargetLocation(box[0] + 1, box[1], grid, visited) && canKeeperMoveTo(box[0] - 1, box[1], box, keeper, grid, new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false)));
    }
    
    function canMoveLeft(box: [number, number], keeper: [number, number], grid: string[][], visited: boolean[][]) {
        return isValidTargetLocation(box[0], box[1] - 1, grid, visited) && canKeeperMoveTo(box[0], box[1] + 1, box, keeper, grid, new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false)));
    }
    
    function canMoveRight(box: [number, number], keeper: [number, number], grid: string[][], visited: boolean[][]) {
        return isValidTargetLocation(box[0], box[1] + 1, grid, visited) && canKeeperMoveTo(box[0], box[1] - 1, box, keeper, grid, new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false)));
    }
    
    function isBoxAtTarget(grid: string[][], box: [number, number]) {
        return grid[box[0]][box[1]] === 'T';
    }

    function getBoxAndKeeperLocation(grid: string[][]): { box: [number, number]; keeper: [number, number]; } {
        let box: [number, number] = [-1, -1];
        let keeper: [number, number] = [-1, -1];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === 'B') {
                    box = [i, j];
                }

                if (grid[i][j] === 'S') {
                    keeper = [i, j];
                }
            }
        }

        return {box, keeper};
    }

    function copyGrid(grid: string[][]): string[][] {
        const copy = Array.from(grid).map(r => Array.from(r));
        return copy;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});











