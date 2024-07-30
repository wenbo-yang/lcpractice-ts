import { TreeNode } from '../commonLibs';

xdescribe('leetcode 222: description', () => {
    function countNodes(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        let l = depth(root.left);
        let r = depth(root.right);

        if (l === r) {
            return (1 << l) + countNodes(root.left);
        } else {
            return (1 << (l - 1)) + countNodes(root.right);
        }
    }

    function depth(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        return 1 + depth(root.left);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
