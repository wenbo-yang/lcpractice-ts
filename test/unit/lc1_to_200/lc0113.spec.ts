import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode number: name', () => {
    function pathSum(root: TreeNode | null, targetSum: number): number[][] {
        const valueStack: number[] = [];
        const result: number[][] = [];

        pathSumHelper(root, targetSum, valueStack, result);

        return result;
    }

    function pathSumHelper(root: TreeNode | null, targetSum: number, valueStack: number[], result: number[][]) {
        if (!root) {
            return;
        }

        if (targetSum === root.val && isLeafNode(root)) {
            result.push([...valueStack, root.val]);
            return;
        }

        valueStack.push(root.val);
        pathSumHelper(root.left, targetSum - root.val, valueStack, result);
        pathSumHelper(root.right, targetSum - root.val, valueStack, result);
        valueStack.pop();
    }

    function isLeafNode(root: TreeNode): boolean {
        return !root.left && !root.right;
    }

    it('test case 1 Input [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22, output [[5,4,11,2],[5,8,4,5]]', () => {
        const root = new BinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]).root;
        const result = pathSum(root, 22);

        expect(result).toEqual([
            [5, 4, 11, 2],
            [5, 8, 4, 5],
        ]);
    });
});
