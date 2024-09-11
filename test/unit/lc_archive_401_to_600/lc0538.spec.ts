import { TreeNode } from '../commonLibs';

xdescribe('leetcode 538: convert bst to greater tree', () => {
    function convertBST(root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }

        const result: number[] = [0];
        rightOrderTraversal(root, result);

        return root;
    }

    function rightOrderTraversal(root: TreeNode | null, result: number[]): void {
        if (!root) {
            return;
        }

        rightOrderTraversal(root.right, result);
        root.val += result[0];
        result[0] = root.val;
        rightOrderTraversal(root.left, result);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
