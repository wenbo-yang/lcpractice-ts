import { TreeNode } from './commonLibs';

xdescribe('leetcode 1325: delete leaves with a given value', () => {
    function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
        removeLeafNodesHelper(root, null, target);
        return root;
    };

    function removeLeafNodesHelper(root: TreeNode | null, parent: TreeNode | null, target: number) {
        if (!root) {
            return;
        }

        removeLeafNodesHelper(root.left, root, target);
        removeLeafNodesHelper(root.right, root, target);

        if (parent && isLeafNode(root) && root.val === target) {
            if (parent.left === root) {
                parent.left = null;
            }
            else {
                parent.right = null;
            }
        }
    }

    function isLeafNode(root: TreeNode) {
        return root.left === null && root.right === null;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



