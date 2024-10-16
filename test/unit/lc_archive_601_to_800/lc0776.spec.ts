import {TreeNode} from './commonLibs';

xdescribe('leetcode 776: split BST', () => {
    function splitBST(root: TreeNode | null, target: number): (TreeNode | null)[] {
        if (!root) {
            return [];
        }

        const targetNode = findTargetHelper(root, null, target);
        if (targetNode === root) {
            return [null, root];
        }

        return [root, targetNode];
    }

    function findTargetHelper(root: TreeNode | null, parent: TreeNode | null, target: number): TreeNode | null {
        if (!root) {
            return null;
        }
        
        if (root.val === target || root.val < target && !root.right) {
            if (parent) {
                if (parent.left === root) {
                    parent.left = null;
                }
                else {
                    parent.right = null;
                }
            }

            return root;
        }

        if (root.val < target && root.right) {
            return findTargetHelper(root.right, root, target);
        }

        return findTargetHelper(root.left, root, target);

    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


