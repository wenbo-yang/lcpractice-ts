
xdescribe('leetcode 1104: description', () => {
    function pathInZigZagTree(label: number): number[] {
        const tree: number[][] = []; 
        let isInorder = true;
        let power = 0;
        while (Math.pow(2, power) < label) {
            if (isInorder) {
                tree.push([Math.pow(2, power), Math.pow(2, power + 1) - 1]);
            }
            else {
                tree.push([Math.pow(2, power + 1) - 1, Math.pow(2, power)]);
            }

            power++;
            isInorder = !isInorder;
        }


        const index = getIndex(label, tree);
        const result: number[] = []
        traceParent(index, tree.length - 1, tree, result);

        return result;
    };

    function getIndex(label: number, tree: number[][]) {
    
        let index = 0;
        if (tree[tree.length - 1][0] > tree[tree.length - 1][1]) { // reverse order
            let max = tree[tree.length - 1][0];
            index = max - label;
        }
        else {
            index = label - tree[tree.length - 1][0];
        }
    
        return index;
    }
    
    function traceParent(index: number, level: number, tree: number[][], result: number[]) {
        if (level === 0) {
            return;
        }

        result.push(translateIndexIntoNumber(tree, level, index));
        const parentIndex = index / 2;

        traceParent(parentIndex, level-1, tree, result);
    }

    function translateIndexIntoNumber(tree: number[][], level: number, index: number): number {
        if (tree[level][0] > tree[level][1]) {
            return tree[level][0] - index;
        }

        return tree[level][0] + index;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




