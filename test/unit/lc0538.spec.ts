import { TreeNode } from "./commonLibs";

xdescribe('leetcode 538: convert bst to greater tree', () => {
    function convertBST(root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }

        rightOrderTraversal(root, 0)

        return root;
    };

    function rightOrderTraversal(root: TreeNode | null, numberSoFar: number): number {
        if (!root) {
            return 0;
        }

        let right = rightOrderTraversal(root.right, numberSoFar);
        root.val += numberSoFar;
        let left = rightOrderTraversal(root.left, root.val);

        return left;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


