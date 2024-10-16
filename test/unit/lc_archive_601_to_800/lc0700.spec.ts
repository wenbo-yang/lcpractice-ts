import {TreeNode} from './commonLibs';

xdescribe('leetcode 700: search bst', () => {
    function searchBST(root: TreeNode | null, val: number): TreeNode | null {
        if (!root) {
            return null;
        }

        if (root.val === val) {
            return root;
        }

        if (val < root.val) {
            return searchBST(root.left, val);
        }
        
        return searchBST(root.right, val);
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
