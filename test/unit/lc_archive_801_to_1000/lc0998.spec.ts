import { TreeNode } from "../commonLibs";

xdescribe('leetcode 998: maximum binary tree', () => {
    function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
        if (!root || root.val < val) {
            return new TreeNode(val, root);
        }
      
        root.right = insertIntoMaxTree(root.right, val);
      
        return root;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
