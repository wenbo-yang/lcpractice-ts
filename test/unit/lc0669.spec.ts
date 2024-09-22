import {TreeNode} from './commonLibs';

xdescribe('leetcode 669: trim bst', () => {
    function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
        if (!root) {
            return null;
        }

        if (root.val <= low) {
            return root.right;
        }

        if (root.val >= high) {
            return root.left;
        }

        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);

        return root;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
