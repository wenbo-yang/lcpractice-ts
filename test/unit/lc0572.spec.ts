import {TreeNode} from './commonLibs';

xdescribe('leetcode 572: is sub tree', () => {
    function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        return isSubTreeHelper(root, subRoot);
    };

    function isSubTreeHelper(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root && !subRoot) {
            return true;
        }

        if (!root || !subRoot) {
            return false;
        }

        if (root.val === subRoot.val && isSubTreeHelper(root.left, subRoot.left) && isSubTreeHelper(root.right, subRoot.left)) {
            return true;
        }

        return isSubTreeHelper(root.left, subRoot) || isSubTreeHelper(root.right, subRoot);
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

