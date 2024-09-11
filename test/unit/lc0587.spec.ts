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
        
        const currentTopLeft = [keys[0], left[left.length - 1]];
        const currentBottomLeft = [keys[0], left[0]];

        const currentTopRope = [currentTopLeft];    
        const currentBottomRope = [currentBottomLeft];    

        for (let i = 1; i < keys.length; i++) {
            const bottom = (treeColumnMap.get(keys[i]) || [0])[0];
            const top = (treeColumnMap.get(keys[i]) || [0])[(treeColumnMap.get(keys[i]) || [0]).length - 1];

            addToTopRope(currentTopRope, [keys[i], top]);            
            addToBottomRope(currentBottomRope, [keys[i], bottom]);
        }

        const currentLeftRope = (treeColumnMap.get(keys[0]) || []).map(y => [keys[0], y]);
        const currentRightRope = (treeColumnMap.get(keys[keys.length - 1]) || []).map(y => [keys[keys.length - 1], y]);

        const result = new Set<string>([...currentLeftRope, ...currentBottomRope, ...currentRightRope, ...currentTopRope].map(coor => coor.join()));

        return Array.from(result).map(s => s.split(',').map(n => Number(n)));        
    };

    function addToTopRope(currentTopRope: number[][], next: number[]) {
        while(shouldReduceTop(currentTopRope, next)) {
            currentTopRope.pop();
        }

        currentTopRope.push(next);
    }

    function shouldReduceTop(currentTopRope: number[][], next: number[]): boolean {
        if (currentTopRope.length < 2) {
            return false;
        }

        const ab = getLine(currentTopRope[currentTopRope.length - 2], next);

        return isLastSmaller(currentTopRope[currentTopRope.length - 1], ab);
    }

    function addToBottomRope(currentBottomRope: number[][], next: number[]) {
        while(shouldReduceBottom(currentBottomRope, next)) {
            currentBottomRope.pop();
        }

        currentBottomRope.push(next)
    }

    function getLine(x1y1: number[], x2y2: number[]): number[] {
        const a = (x2y2[1] - x1y1[1]) / (x2y2[0] - x1y1[0]);
        const b = x2y2[1] - a * x2y2[0];

        return [a, b];
    }

    function isLastSmaller(xy: number[], ab: number[]): boolean {
        return xy[1] < xy[0] * ab[0] + ab[1];
    }

    function shouldReduceBottom(currentBottomRope: number[][], next: number[]): boolean {
        if (currentBottomRope.length < 2) {
            return false;
        }

        const ab = getLine(currentBottomRope[currentBottomRope.length - 2], next);

        return isLastBigger(currentBottomRope[currentBottomRope.length - 1], ab);
    }

    function isLastBigger(xy: number[], ab: number[]): boolean {
        return xy[1] > xy[0] * ab[0] + ab[1];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




