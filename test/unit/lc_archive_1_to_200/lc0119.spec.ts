xdescribe('leetcode 119: pascals triange but use minimal memory', () => {
    function getRow(rowIndex: number): number[] {
        if (rowIndex === 0) {
            return [1];
        }

        if (rowIndex === 1) {
            return [1, 1];
        }

        let memory = [1, 1];
        // [1,1]
        // [1,2,1] index = 2

        for (let i = 2; i <= rowIndex; i++) {
            let current: number[] = [];
            current.push(1);
            for (let j = 1; j < i; j++) {
                current[j] = memory[j - 1] + memory[j];
            }
            current.push(1);

            memory = current;
        }

        return memory;
    }

    it('test case 1 Input: 4 output [1,4,6,4,1] ', () => {
        const result = getRow(4);
        expect(result).toEqual([1, 4, 6, 4, 1]);
    });

    it('test case 2 Input: 5 output [1,5,10,10,5,1] ', () => {
        const result = getRow(5);
        expect(result).toEqual([1, 5, 10, 10, 5, 1]);
    });
});
