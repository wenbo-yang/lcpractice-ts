import { BinaryTree, TreeNode } from './commonLibs';

xdescribe('leetcode 144: binary tree preorder traversal', () => {
    function preorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = [];
        preorderTraversalHelper(root, result);
        return result;
    }

    function preorderTraversalHelper(root: TreeNode | null, result: number[]) {
        if (!root) {
            return;
        }

        result.push(root.val);

        preorderTraversalHelper(root.left, result);
        preorderTraversalHelper(root.right, result);
    }

    it('test case 1 Input root = [1,null,2,3], output [1,2,3]', () => {
        const root = new BinaryTree([1, null, 2, 3]).root;
        const result = preorderTraversal(root);
        expect(result).toEqual([1, 2, 3]);
    });
});
