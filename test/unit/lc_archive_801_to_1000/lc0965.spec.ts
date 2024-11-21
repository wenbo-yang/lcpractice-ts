import { TreeNode } from "../commonLibs";

xdescribe('leetcode 965: univalued binary tree', () => {
    function isUnivalTree(root: TreeNode | null): boolean {
        if (!root) {
            return true; 
        }
    
        function checkUnival(root: TreeNode | null, value: number): boolean {
            if (root === null) {
                return true;
            }
            if (root.val !== value) {
                return false;
            }
            return checkUnival(root.left, value) && checkUnival(root.right, value);
        }
    
        return checkUnival(root, root.val);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
