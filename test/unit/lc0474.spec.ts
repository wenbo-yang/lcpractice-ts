xdescribe('leetcode 474: ones and zeros', () => {
    function findMaxForm(strs: string[], m: number, n: number): number {
        const dpTable = Array.from({ length: m + 1 }, () =>
            Array.from({ length: n + 1 }, () => 0)
        );
    
        // A helper function to count the number of zeroes and ones in a string. 
        // It returns a tuple [zeroCount, oneCount].
        const countZeroesAndOnes = (str: string): [number, number] => {
            let zeroCount = 0;
            for (const char of str) {
                if (char === '0') {
                    zeroCount++;
                }
            }
            return [zeroCount, str.length - zeroCount];
        };
    
        // Iterate through each string in the input array.
        for (const str of strs) {
            // Count the number of zeroes and ones in the current string.
            const [zeroes, ones] = countZeroesAndOnes(str);
    
            // Update the dpTable in reverse to avoid overwriting data we still need to use.
            for (let i = m; i >= zeroes; --i) {
                for (let j = n; j >= ones; --j) {
                    // The maximum number of strings that can be included is either the current count 
                    // or the count obtained by including the current string plus the count of strings
                    // that can be included with the remaining zeroes and ones.
                    dpTable[i][j] = Math.max(dpTable[i][j], dpTable[i - zeroes][j - ones] + 1);
                }
            }
        }
    
        // The final result is stored in dpTable[zeroLimit][oneLimit], reflecting the maximum number
        // of strings we can include given the original zeroLimit and oneLimit.
        return dpTable[m][n];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


