import { isEqual } from "lodash";

xdescribe('leetcode 957: prison cells after N days', () => {
    function prisonAfterNDays(cells: number[], n: number): number[] {
        let firstDayCells = new Array<number>(cells.length);
        const nextDayCells = new Array<number>(cells.length);
    
        for (let day = 0; n-- > 0; cells = Array.from(nextDayCells), ++day) {
            for (let i = 1; i + 1 < cells.length; ++i) {
                nextDayCells[i] = cells[i - 1] == cells[i + 1] ? 1 : 0;
            }
            
            if (day == 0) {
                firstDayCells = Array.from(nextDayCells);
            }
            else if (isEqualArray(firstDayCells, nextDayCells)) {
                n %= day;
            }  
        }
    
        return cells;
    };

    function isEqualArray(firstDayCells: number[], nextDayCells: number[]) {
        let index = 0;
        const result = firstDayCells.map(f => f === nextDayCells[index++]);
        return firstDayCells.length === nextDayCells.length && result.find(n => n === false);
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


