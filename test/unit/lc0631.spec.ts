import { Queue } from "./commonLibs";

xdescribe('leetcode 631: design excel sum formula', () => {
    class Excel {
        rows: number;
        columns: number;
        cells: number[][];
        cellSumMap = new Map<string, Map<string, number>>();
        sumCellMap = new Map<string, Map<string, number>>();
    
        public Excel(H: number, W: number) {
            this.rows = H + 1;
            this.columns = W - 'A'.charCodeAt(0) + 1;
            this.cells = new Array<Array<number>>(this.rows).fill([]).map(r => new Array<number>(this.columns).fill(0));;
        }
        
        public set(r: number, c: string, v: number) {
            let prevValue = this.cells[r][c.charCodeAt(0) - 'A'.charCodeAt(0)];
            let difference = v - prevValue;
            const cellName = c.toString() + r;
            const cellMap = this.sumCellMap.get(cellName) || new Map<string, number>();
            this.sumCellMap.delete(cellName);
            const cellSet = cellMap.keys();
            for (const cell of cellSet) {
                const sumMap = this.cellSumMap.get(cell, ) || new Map<string, number>();
                sumMap.delete(cellName);
                this.cellSumMap.set(cell, sumMap);
            }
            this.updateRelevantCells(cellName, difference);
        }
        
        public get(r: number, c: string) {
            return this.cells[r][c.charCodeAt(0) - 'A'.charCodeAt(0)];
        }
        
        public sum(r: number, c: string, strs: string[]) {
            let sum = 0;
            let prevValue = this.cells[r][c.charCodeAt(0) - 'A'.charCodeAt(0)];
            this.set(r, c, prevValue);
            const sumCellName = c.toString() + r;
            for (const str of strs) {
                if (str.indexOf(':') >= 0) {
                    const array = str.split(":");
                    const start = array[0], end = array[1];
                    const startColumn = Number(start[0]);
                    const endColumn = Number(end[0]);
                    const startRow = Number(start.substring(1));
                    const endRow = Number(end.substring(1));
                    for (let i = startRow; i <= endRow; i++) {
                        for (let j = startColumn; j <= endColumn; j++) {
                            const cellName = j.toString() + i;
                            const sumMap = this.cellSumMap.get(cellName) || new Map<string, number>();
                            const sumCount = (sumMap.get(sumCellName) || 0 )+ 1;
                            sumMap.set(sumCellName, sumCount);
                            this.cellSumMap.set(cellName, sumMap);
                            const cellMap = this.sumCellMap.get(sumCellName) || new Map<string, number>();
                            const cellCount = (cellMap.get(cellName) || 0) + 1;
                            cellMap.set(cellName, cellCount);
                            this.sumCellMap.set(sumCellName, cellMap);
                            sum += this.cells[i][j - 'A'.charCodeAt(0)];
                        }
                    }
                    
                } else {
                    const sumMap = this.cellSumMap.get(str) || new Map<string, number>();
                    const sumCount = (sumMap.get(sumCellName) ||  0) + 1;
                    sumMap.set(sumCellName, sumCount);
                    this.cellSumMap.set(str, sumMap);
                    const cellMap = this.sumCellMap.get(sumCellName) || new Map<string, number>();
                    const cellCount = (cellMap.get(str) || 0) + 1;
                    cellMap.set(str, cellCount);
                    this.sumCellMap.set(sumCellName, cellMap);
                    const cellColumn = str[0];
                    const cellRow = Number(str.substring(1));
                    sum += this.cells[cellRow][cellColumn.charCodeAt(0) - 'A'.charCodeAt(0)];
                }
            }
            const difference = sum - prevValue;
            this.updateRelevantCells(sumCellName, difference);
            return this.cells[r][c - 'A'.charCodeAt(0)];
        }
    
        private updateRelevantCells(cellName: string, difference: number) {
            const cellQueue = new Queue<string>();
            const differenceQueue = new Queue<number>();
            cellQueue.enque(cellName);
            differenceQueue.enque(difference);
            while (cellQueue.length) {
                const cell = cellQueue.deque() || '';
                const curDifference = differenceQueue.deque() || 0;
                const column = cell[0];
                const row = Number(cell.substring(1));
                this.cells[row][column.charCodeAt(0) - 'A'.charCodeAt(0)] += curDifference;
                const map = this.cellSumMap.get(cell) || new Map<string, number>();
                const set = map.keys();
                for (const nextCell of set) {
                    const count = map.get(nextCell) || 1;
                    cellQueue.enque(nextCell);
                    differenceQueue.enque(curDifference * count);
                }
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
