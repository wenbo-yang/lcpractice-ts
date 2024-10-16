import { TreeNode } from "./commonLibs";

xdescribe('leetcode 701: description', () => {
    function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
        if (!root) {
            return new TreeNode(val);
        }

        if (root.val > val) {
            root.left = insertIntoBST(root.left, val);
        }
        else {
            root.right = insertIntoBST(root.right, val);
        }

        return root;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
