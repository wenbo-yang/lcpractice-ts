xdescribe('leetcode 952: largest component size', () => {
    function initializeUnionFind(size: number, parents: number[]): void {
        return 
    }
    
    // 'unite' merges the sets that contain elements 'a' and 'b'.
    function unite(a: number, b: number, parents: number[]): void {
        const parentA = find(a, parents), parentB = find(b, parents);
        if (parentA != parentB) parents[parentA] = parentB;
    }
    
    // 'find' returns the representative of the set that contains 'x', implementing path compression.
    function find(x: number, parents: number[]): number {
        if (parents[x] !== x) parents[x] = find(parents[x], parents);
        return parents[x];
    }
    
    
    function largestComponentSize(nums: number[]): number {
        const size = Math.max(...nums) + 1;
        const parents = Array.from({ length: size }, (_, index) => index);

        for (const num of nums) {
            for (let factor = 2; factor <= Math.sqrt(num); ++factor) {
                if (num % factor === 0) {
                    unite(num, factor, parents);
                    unite(num, num / factor, parents);
                }
            }
        }
    
        const counts = new Array(size).fill(0);
        let largestSize = 0;
    
        for (const num of nums) {
            const root = find(num, parents);
            counts[root]++;
            largestSize = Math.max(largestSize, counts[root]);
        }
    
        return largestSize;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
