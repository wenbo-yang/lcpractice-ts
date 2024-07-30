import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 94: Binary Tree Inorder Traversal', () => {
    function inorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = [];

        inorderTraversalHelper(root, result);

        return result;
    }

    function inorderTraversalHelper(root: TreeNode | null, result: number[]) {
        if (!root) {
            return;
        }

        inorderTraversalHelper(root.left, result);
        result.push(root.val);
        inorderTraversalHelper(root.right, result);
    }

    it('test case 1 Input: root = [1,null,2,3], output [1,3,2]', () => {
        const nums = [1, null, 2, 3];
        const root = new BinaryTree(nums).root;

        const result = inorderTraversal(root);

        expect(result).toEqual([1, 3, 2]);
    });
});
