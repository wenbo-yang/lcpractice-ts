import { TreeNode } from './commonLibs';

xdescribe('leetcode 450: delete node in a BST', () => {
    function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
        if (!root) return root;
        if (key > root.val) {
            root.right = deleteNode(root.right, key);
        } else if (key < root.val) {
            root.left = deleteNode(root.left, key);
        } else {
            let newRoot: TreeNode | null = null;
            if (!root.left) {
                newRoot = root.right;
            } else if (!root.right) {
                newRoot = root.left;
            } else {
                // Find the min node in the right sub tree
                let parent = root;
                newRoot = root.right;
                while (newRoot && newRoot.left) {
                    parent = newRoot;
                    newRoot = newRoot.left;
                }

                if (parent != root) {
                    parent.left = newRoot.right;
                    newRoot.right = root.right;
                }

                newRoot.left = root.left;
            }

            return newRoot;
        }

        return root;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
