xdescribe('leetcode 1349: maximum students taking exam', () => {
    function maxStudents(seats: string[][]): number {
        let rows = seats.length; 
        let cols = seats[0].length; 
        let validSeats: number[] = new Array(rows).fill(0);
        for (let i = 0; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                if (seats[i][j] === '.') {
                    validSeats[i] |= 1 << j; 
                }
            }
        }
    
        let cache: number[][] = Array.from({length: 1 << cols}, () => Array(rows).fill(-1));
        let dfs = (seatMask: number, row: number): number => {
            if (cache[seatMask][row] !== -1) {
                return cache[seatMask][row];
            }
            let maxStudents = 0; 

            for (let mask = 0; mask < (1 << cols); ++mask) {
                if ((seatMask | mask) !== seatMask || (mask & (mask << 1)) !== 0) {
                    continue;
                }
            
                let count = countBits(mask);
                if (row === rows - 1) {
                    maxStudents = Math.max(maxStudents, count);
                } else {
                    let nextValidSeats = validSeats[row + 1];
                    nextValidSeats &= ~(mask >> 1);
                    nextValidSeats &= ~(mask << 1);
                    maxStudents = Math.max(maxStudents, count + dfs(nextValidSeats, row + 1));
                }
            }
        
            return cache[seatMask][row] = maxStudents;
        };
        
        return dfs(validSeats[0], 0);
    };

    function countBits(mask: number): number {
        let count = 0;
        while(mask > 0) {
            count += mask & 1;
            mask >>= 1;
        }
        return count;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
