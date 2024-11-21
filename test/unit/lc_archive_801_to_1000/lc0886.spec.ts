xdescribe('leetcode 886: possible bi partition', () => {
    function possibleBipartition(n: number, dislikes: number[][]): boolean {
        const group1: {ids: Set<number>, dislikes: Set<number>} = {ids: new Set<number>(), dislikes: new Set<number>()};
        const group2: {ids: Set<number>, dislikes: Set<number>} = {ids: new Set<number>(), dislikes: new Set<number>()};

        for (const pair of dislikes) {
            const first = pair[0];
            const second = pair[1];

            if (canInsert(group1, first, second) && canInsert(group2, second, first)) {
                insert(group1, first, second);
                insert(group2, second, first);
            }
            else if (canInsert(group2, first, second) && canInsert(group1, second, first)){
                insert(group2, first, second);
                insert(group1, second, first);
            }
            else {
                return false;
            }
        }

        return true;
    };

    function canInsert(group: { ids: Set<number>; dislikes: Set<number>; }, first: number, second: number) {
        return !group.dislikes.has(first);
    }

    function insert(group: { ids: Set<number>; dislikes: Set<number>; }, first: number, second: number) {
        group.ids.add(first);
        group.dislikes.add(second);
    }
    
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




