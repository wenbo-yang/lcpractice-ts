xdescribe('leetcode 587: erect tree fence', () => {
    function outerTrees(trees: number[][]): number[][] {
        trees.sort((a, b) => {
            if (a[0] > b[0]) return 1;
            if (a[0] < b[0]) return -1;

            return a[1] - b[1] > 0 ? 1 : -1;
        });

        const treeColumnMap = new Map<number, number[]>();
        for (let i = 0; i < trees.length; i++) {
            const columnValues = treeColumnMap.get(trees[i][0]) || [];
            columnValues.push(trees[i][1]);
            treeColumnMap.set(i, columnValues);
        }

        const keys = Array.from(treeColumnMap.keys()).sort();
        for (const k of keys) {
            (treeColumnMap.get(keys[0]) || []).sort();
        }
        
        const left = (treeColumnMap.get(keys[0]) || []);
        const right = (treeColumnMap.get(keys[keys.length - 1]) || []);

        const currentTopLeft = [keys[0], left[left.length - 1]];
        const currentTopRight = [keys[keys.length - 1], right[right.length - 1]];
        const currentBottomRight = [keys[keys.length - 1], right[0]];
        const currentBottomLeft = [keys[0], left[0]];

        const currentTopRope = [currentTopLeft, currentTopRight];    
        const currentBottomRope = [currentBottomLeft, currentBottomRight];    

        while(areThereTreesOutsideTop(currentTopRope, treeColumnMap, keys)) {
            addMaxToCurrentTopRope(currentTopRope, treeColumnMap, keys);
        }

        while(areThereTreesOutsidBottom(currentBottomRope, treeColumnMap, keys)) {
            addMaxToCurrentBottomRope(currentBottomRope, treeColumnMap, keys);
        }

        const result = new Set<string>();

        return Array.from(result).map(s => s.split(',').map(n => Number(n)));        
    };

    function areThereTreesOutsideTop(currentTopRope: number[][], treeColumnMap: Map<number, number[]>, keys: number[]): boolean{
        throw new Error("Function not implemented.");
    }
    
    function addMaxToCurrentTopRope(currentTopRope: number[][], treeColumnMap: Map<number, number[]>, keys: number[]) {
        throw new Error("Function not implemented.");
    }

    function areThereTreesOutsidBottom(currentTopRope: number[][], treeColumnMap: Map<number, number[]>, keys: number[]): boolean{
        throw new Error("Function not implemented.");
    }
    
    function addMaxToCurrentBottomRope(currentTopRope: number[][], treeColumnMap: Map<number, number[]>, keys: number[]) {
        throw new Error("Function not implemented.");
    }
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



