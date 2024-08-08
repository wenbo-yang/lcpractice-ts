import { BinaryTree, TreeNode } from "../commonLibs";
xdescribe('leetcode 337: description', () => {
    function rob(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        const result = Math.max(root.val + robHelper(root.left, true) + robHelper(root.right, true), robHelper(root.left, false), robHelper(root.right, false));
        return result;
    }

    function robHelper(root: TreeNode | null, robbedParent: boolean): number {
        if (!root) {
            return 0;
        }

        if (robbedParent) {
            return robHelper(root.left, false) + robHelper(root.right, false);
        }

        return Math.max(root.val + robHelper(root.left, true) + robHelper(root.right, true), robHelper(root.left, false), robHelper(root.right, false));
    }

    it('test case 1 Input: [3,2,3,null,3,null,1], output 7', () => {
        const root = new BinaryTree([3,2,3,null,3,null,1]).root;

        expect(rob(root)).toEqual(7);
    });
});


