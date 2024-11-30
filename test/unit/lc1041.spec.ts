xdescribe('leetcode 1041: robot bounded in circle', () => {
    function isRobotBounded(instructions: string): boolean {
        const distances: number[] = new Array(4).fill(0);
  
        let direction = 0;
  
        for (const instruction of instructions) {
            if (instruction === 'L') {
                direction = (direction + 1) % 4;
            } else if (instruction === 'R') {
                direction = (direction + 3) % 4;
            } else {
                ++distances[direction];
            }
        }

        return (distances[0] === distances[2] && distances[1] === distances[3]) || direction !== 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
