import { TreeNode } from '../commonLibs';

xdescribe('leetcode 314: binary tree vertical order traversal', () => {
    function binaryTreeVerticalOrderTraversal(root: TreeNode | null): number[][] {
        const map = new Map<number, number[]>();
        const minMax = [0, 0];

        binaryTraversalHelper(root, 0, minMax, map);
        const result: number[][] = [];
        for (let i = minMax[0]; i <= minMax[1]; i++) {
            result.push(Array.from(map.get(i) || []));
        }

        return result;
    }

    function binaryTraversalHelper(root: TreeNode | null, currentIndex: number, minMax: number[], map: Map<number, number[]>) {
        if (!root) {
            return;
        }

        const currentCol = map.get(currentIndex) || [];
        currentCol.push(root.val);
        map.set(currentIndex, currentCol);

        if (currentIndex < minMax[0]) {
            minMax[0] = currentIndex;
        }

        if (currentIndex > minMax[1]) {
            minMax[1] = currentIndex;
        }

        binaryTraversalHelper(root.left, currentIndex - 1, minMax, map);
        binaryTraversalHelper(root.right, currentIndex + 1, minMax, map);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
