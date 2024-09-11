import { TreeNode } from '../commonLibs';

xdescribe('leetcode 549: binary tree longest consecutive sequence', () => {
    function longestBinaryTreeConsecutiveSequence(root: TreeNode | null): number {
        const inorder: number[] = [];

        inorderTraversal(root, inorder);

        let max = 0;
        let increasing = 1;
        let decreasing = 1;
        for (let i = 1; i < inorder.length; i++) {
            if (inorder[i] - inorder[i - 1] === 1) {
                increasing++;
                decreasing = 1;
            } else if (inorder[i] - inorder[i - 1] === -1) {
                decreasing++;
                increasing = 1;
            } else {
                decreasing = 1;
                increasing = 1;
            }

            max = Math.max(max, decreasing, increasing);
        }

        return max;
    }

    function inorderTraversal(root: TreeNode | null, inorder: number[]) {
        if (!root) {
            return;
        }

        inorderTraversal(root.left, inorder);
        inorder.push(root.val);
        inorderTraversal(root.right, inorder);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
