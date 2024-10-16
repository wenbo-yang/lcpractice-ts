xdescribe('leetcode 657: is back at origin', () => {
    function judgeCircle(moves: string): boolean {
        const coor = [0, 0];

        for (const move of moves) {
            if (move === 'L') {
                coor[1] -= 1;
            }
            if (move === 'R') {
                coor[1] += 1;
            }
            if (move === 'U') {
                coor[0] -= 1;
            }
            if (move === 'D') {
                coor[0] -= 1;
            } 
        }

        return coor[0] === 0 && coor[1] === 0;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
