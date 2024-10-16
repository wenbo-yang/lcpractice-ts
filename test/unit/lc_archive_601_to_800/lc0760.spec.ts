xdescribe('leetcode 760: description', () => {
    function findAnagramMappings(a: number[], b: number[]): number[] {
        let index = 0;
        const valueIndexMap = new Map<number, number>(a.map(n => [n, index++]));
        const result: number[] = [];
        
        b.forEach( n => result.push(valueIndexMap.get(n) || 0));

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
