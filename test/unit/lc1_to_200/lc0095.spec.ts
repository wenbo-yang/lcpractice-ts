import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 95: unique binary search trees', () => {
    function generateTrees(n: number): Array<TreeNode | null> {
        let index = 0;
        const array = new Array<number>(n).map((i) => ++index);
        const results: (TreeNode | null)[] = [];

        constructBinarySearchTree(0, array, null, array.length, results);

        return results;
    }

    function constructBinarySearchTree(pivot: number, array: number[], actualRoot: TreeNode | null, intendedSize: number, results: (TreeNode | null)[]): TreeNode | null {
        for (let i = pivot; i < array.length; i++) {
            const root = new TreeNode(array[pivot]);
            if (actualRoot === null) {
                actualRoot = root;
            }
            const left = array.slice(0, pivot);
            const right = array.slice(pivot + 1);

            if (left.length > 0) {
                const leftIndex = Math.floor(left.length / 2);
                root.left = constructBinarySearchTree(left[leftIndex], left, actualRoot, intendedSize - 1, results);
            }

            if (right.length > 0) {
                const rightIndex = Math.floor(right.length / 2);
                root.right = constructBinarySearchTree(rightIndex, right, actualRoot, intendedSize - 1, results);
            }

            if (right.length === 0 && left.length === 0 && intendedSize === 0) {
                // reached leaf node,
                const array = BinaryTree.convertTreeNodeToArrayBfs(actualRoot);
                results.push(copyTree(actualRoot));
            }
        }

        return null;
    }

    function copyTree(actualRoot: TreeNode | null): TreeNode | null {
        if (actualRoot === null) {
            return null;
        }

        const root = new TreeNode(actualRoot.val);
        root.left = copyTree(actualRoot.left);
        root.right = copyTree(actualRoot.right);

        return root;
    }

    it('test case 1 Input: n = 3, output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]', () => {
        // const result = constructBinarySearchTree(2, [1, 2], [3, 4]);
        // const resultArray = BinaryTree.convertTreeNodeToArrayBfs(result);
    });
});
