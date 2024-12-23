xdescribe('leetcode 1220: count vowels permutation', () => {
    const MOD = 1e9 + 7; 
    function countVowelPermutation(n: number): number {
        const transitionMatrix: number[][] = [
            [0, 1, 0, 0, 0], 
            [1, 0, 1, 0, 0],
            [1, 1, 0, 1, 1],
            [0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0],
        ];
        const result = matrixPower(transitionMatrix, n - 1);
        return result[0].reduce((sum, value) => (sum + value) % MOD);
    };

    function multiplyMatrices(a: number[][], b: number[][]): number[][] {
        const resultRows = a.length;
        const resultColumns = b[0].length;
        const c = Array.from(
            { length: resultRows },
            () => Array.from({ length: resultColumns }, () => 0)
        );
    
        for (let i = 0; i < resultRows; ++i) {
            for (let j = 0; j < resultColumns; ++j) {
                for (let k = 0; k < b.length; ++k) {
                    c[i][j] =
                        (c[i][j] + Number((BigInt(a[i][k]) * BigInt(b[k][j])) % BigInt(MOD))) % MOD;
                }
            }
        }
        return c;
    }
    
    function matrixPower(a: number[][], n: number): number[][] {
        let result: number[][] = Array.from(
            { length: a.length },
            () => Array.from(
                { length: a.length },
                (val, index) => index === a.length - 1 ? 1 : 0
            )
        );
    
        while (n) {
            if (n & 1) {
                result = multiplyMatrices(result, a);
            }
            a = multiplyMatrices(a, a);
            n >>>= 1;
        }
        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
