xdescribe('leetcode 1213: intersection of three sorted arrays', () => {
    function arraysIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
        const set1 = new Set<number>(arr1);
        const set2 = new Set<number>(arr2);
        const set3 = new Set<number>(arr3);

        const intersection1n2: number[] = []; 
        Array.from(set1.values()).forEach(n => {if(set2.has(n))  intersection1n2.push(n)});

        const intersection: number[] = [];

        intersection1n2.forEach(n => { if(set3.has(n)) intersection.push(n); });

        return intersection;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
