xdescribe('leetcode 1252: description', () => {
    function oddCells(m: number, n: number, indices: number[][]): number {
        const cols = new Array<number>(n).fill(0);
        const rows = new Array<number>(m).fill(0);

        indices.forEach(coor => { rows[coor[0]]++; cols[coor[1]]++; });
        
        let oddCells = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if ((rows[i] + cols[j]) % 2 === 1)  {
                    oddCells++;
                }
            }
        }

        return oddCells;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
