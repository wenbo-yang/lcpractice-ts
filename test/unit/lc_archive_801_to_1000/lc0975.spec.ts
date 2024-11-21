xdescribe('leetcode 975: description', () => {
    let n: number = 0;
    let nextJump: number[][];
    let jumps: number[][];
    let indicesMap: Map<number, number> = new Map<number, number>();
    function populateNextJump(arr: number[]): void {
        n = arr.length;
        jumps = Array.from(Array(n), () => Array(2).fill(0)); 
        nextJump = Array.from(Array(n), () => Array(2).fill(-1)); 
        
        for (let i = n - 1; i >= 0; --i) {
            const it = lowerBound(indicesMap, arr[i]); 
            const array = Array.from(indicesMap.values());

            nextJump[i][1] = (it.value === array[array.length - 1]) ? -1 : it.value; 
        
            const itUpper = upperBound(indicesMap, arr[i]);
            nextJump[i][0] = (itUpper.value === array[0]) ? -1 : prev(itUpper).value;
        
            indicesMap.set(arr[i], i);
        }
    }
    
    function depthFirstSearch(index: number, jumpType: number): number {
        if (index === n - 1) {
            return 1;
        }
        if (nextJump[index][jumpType] === -1) {
            return 0;
        }
        if (jumps[index][jumpType] !== 0) {
            return jumps[index][jumpType];
        }
        jumps[index][jumpType] = depthFirstSearch(nextJump[index][jumpType], 1 - jumpType);
        return jumps[index][jumpType];
    }
    
    function oddEvenJumps(arr: number[]): number {
        populateNextJump(arr); 
        
        let answer: number = 0; 
        for (let i = 0; i < n; ++i) {
            answer += depthFirstSearch(i, 1); 
        }
        return answer; 
    }
    
    function lowerBound(map: Map<number, number>, value: number): { end: () => boolean, value: number } {
        return { end: () => false, value: 0 };
    }
    
    function upperBound(map: Map<number, number>, value: number): { begin: () => boolean, value: number } {
        return { begin: () => false, value: 0 }; 
    }
    
    function prev(iterator: { value: number }): { value: number } {
        return { value: iterator.value }; 
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
