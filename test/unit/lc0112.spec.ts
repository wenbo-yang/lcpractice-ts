import { BinaryTree, TreeNode } from './commonLibs';

xdescribe('leetcode 112: Path Sum', () => {
    function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (!root) {
            return false;
        }

        if (targetSum === root.val && isLeafNode(root)) {
            return true;
        }

        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }

    function isLeafNode(root: TreeNode) {
        return !root.left && !root.right;
    }

    it('test case 1 Input : [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22, output true', () => {
        const root = new BinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]).root;

        const result = hasPathSum(root, 22);

        expect(result).toBeTruthy();
    });

    it('test case 2 Input : 1,2,3], targetSum = 5, output true', () => {
        const root = new BinaryTree([1, 2, 3]).root;

        const result = hasPathSum(root, 5);

        expect(result).toBeFalsy();
    });
});
