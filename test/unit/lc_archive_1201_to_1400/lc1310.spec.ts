xdescribe('leetcode 1310: xor queries of a subarray', () => {
    function xorQueries(arr: number[], queries: number[][]): number[] {
        const arrLength = arr.length;
        const prefixXOR: number[] = new Array(arrLength + 1).fill(0);
    
        for (let i = 0; i < arrLength; ++i) {
            prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
        }
    
        const results: number[] = [];
    
        for (const [left, right] of queries) {
            results.push(prefixXOR[right + 1] ^ prefixXOR[left]);
        }
        return results;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
