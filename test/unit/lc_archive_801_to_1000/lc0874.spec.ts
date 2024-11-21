xdescribe('leetcode 874: walking robot simulation', () => {
    function robotSim(commands: number[], obstacles: number[][]): number {
        const obstaclesSet = new Set<string>(obstacles.map(coor => coor.join()));
        let currentFacing = [0, 1];
        let currentPosition = [0, 0];
        
        for (const c of commands) {
            if (c === -1) { // turn right
                currentFacing = turnRight(currentFacing)
            }
            else if (c === -2) { // turn left
                currentFacing = turnLeft(currentFacing);
            }
            else {
                for (let i = 1; i <= c; i++) {
                    const nextPosition = sum(currentFacing, currentPosition);
                    if (obstaclesSet.has(toKey(nextPosition))) {
                        break;
                    }
                    currentPosition = nextPosition;
                }
            }
        }

        return currentPosition[0] * currentPosition[0] + currentPosition[1] * currentPosition[1];
    };

    function turnRight(currentFacing: number[]): number[] {
        if (toKey(currentFacing) === toKey([0, 1])) {
            return [1, 0];
        }

        if (toKey(currentFacing) === toKey([1, 0])) {
            return [0, -1];
        }

        if (toKey(currentFacing) === toKey([0, -1])) {
            return [-1, 0];
        }

        return [0, 1];
    }

    function turnLeft(currentFacing: number[]): number[] {
        if (toKey(currentFacing) === toKey([0, 1])) {
            return [-1, 0];
        }

        if (toKey(currentFacing) === toKey([-1, 0])) {
            return [0, -1];
        }

        if (toKey(currentFacing) === toKey([0, -1])) {
            return [1, 0];
        }

        return [0, 1];
    }


    function toKey(currentFacing: number[]) {
        return currentFacing.join();
    }
    
    function sum(currentFacing: number[], currentPosition: number[]) {
        return [currentFacing[0] + currentPosition[0], currentFacing[1] + currentPosition[1]];
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





