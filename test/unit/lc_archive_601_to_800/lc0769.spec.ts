xdescribe('leetcode 769: description', () => {
    function maxChunksToSorted(arr: number[]): number {
        const n: number = arr.length; 
        let answer: number = 0; 
        let currentMax: number = 0; 
    
        for (let i: number = 0; i < n; i++) {
            currentMax = Math.max(arr[i], currentMax);
    
            if (currentMax === i) {
                answer++; 
            }
        }
        
        return answer;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
