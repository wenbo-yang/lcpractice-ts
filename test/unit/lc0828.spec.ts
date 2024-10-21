xdescribe('leetcode 828: count unique characters of ', () => {
    function uniqueLetterString(s: string): number {
        // s = L E E T C O D E
        //     0 1 2 3 4 5 6 7
        //     1 1 1 1 1 1 1 1
        //     0 1 it has 0, 1, and 0 1 => LE 2
        //     0 2 => it has 0, 1, 2 => [0, 1] + [1, 2] + [0, 1, 2]
        //     0 3 => it has 0, 1, 2, 3 => [0, 1, 2] + [1, 2, 3] (1 2 + 3), + [2,3]
        //     0 4 => it has 0, 1, 2, 3 4 => [0, 1, 2, 3] + 4

        let indices: number[][] = Array.from({ length: 26 }, () => [-1]);

        for (let i = 0; i < s.length; i++) {
            indices[s.charCodeAt(i) - 'A'.charCodeAt(0)].push(i);
        }
    
        let count: number = 0;
    
        indices.forEach((charIndices: number[]) => {
            charIndices.push(s.length);
    
            for (let i = 1; i < charIndices.length - 1; i++) {
                count += (charIndices[i] - charIndices[i - 1]) * (charIndices[i + 1] - charIndices[i]);
            }
        });
    
        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
