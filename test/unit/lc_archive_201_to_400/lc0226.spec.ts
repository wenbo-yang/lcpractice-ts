import { TreeNode } from '../commonLibs';

xdescribe('leetcode 226: ', () => {
    function invertTree(root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }

        const temp = root.right;

        root.right = invertTree(root.left);
        root.left = invertTree(temp);

        return root;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
