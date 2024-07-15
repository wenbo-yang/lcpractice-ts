import { TreeNode } from './commonLibs';
xdescribe('leetcode 156: upside down binary tree', () => {
    // idea traversal
    // my root is my left node my peer is my right node
    function upsideDownBinaryTree(root: TreeNode | null): TreeNode | null {
        if (!root || !root.left) {
            return root;
        }

        const left = root.left;
        const right = root.right;

        let newRoot = upsideDownBinaryTree(left);

        left.left = right;
        left.right = root;
        root.left = null;
        root.right = null;

        return newRoot;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
