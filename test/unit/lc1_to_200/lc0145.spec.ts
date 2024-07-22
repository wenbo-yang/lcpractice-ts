import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 145: binary tree post order traversal', () => {
    function postorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = [];
        postorderTraversalHelper(root, result);
        return result;
    }

    function postorderTraversalHelper(root: TreeNode | null, result: number[]) {
        if (!root) {
            return;
        }

        postorderTraversalHelper(root.left, result);
        postorderTraversalHelper(root.right, result);
        result.push(root.val);
    }

    it('test case 1 Input root = [1,null,2,3], output [3,2,1]', () => {
        const root = new BinaryTree([1, null, 2, 3]).root;
        const result = postorderTraversal(root);
        expect(result).toEqual([3, 2, 1]);
    });
});
