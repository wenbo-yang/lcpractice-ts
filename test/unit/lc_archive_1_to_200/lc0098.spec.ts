import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 98: valid bst', () => {
    function isValidBST(root: TreeNode | null): boolean {
        if (root === null) {
            return true;
        }

        return isValidBSTHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }

    function isValidBSTHelper(root: TreeNode | null, minValue: number, maxValue: number): boolean {
        if (!root) {
            return true;
        }

        if (root.val <= minValue || root.val >= maxValue) {
            return false;
        }

        return isValidBSTHelper(root.left, minValue, root.val) && isValidBSTHelper(root.right, root.val, maxValue);
    }

    function inOrderTraversal(root: TreeNode | null, prev: TreeNode[]): boolean {
        if (!root) {
            return true;
        }

        if (!inOrderTraversal(root.left, prev)) {
            return false;
        }

        if (prev.length > 0 && root.val <= prev[prev.length - 1].val) {
            return false;
        }

        prev.push(root);

        return inOrderTraversal(root.right, prev);
    }

    it('test case 1 Input: root = [2,1,3], output true ', () => {
        const root = new BinaryTree([2, 1, 3]).root;

        const result = isValidBST(root);

        expect(result).toBeTruthy();
    });

    it('test case 2 Input: root = [5,1,4,null,null,3,6], output false ', () => {
        const root = new BinaryTree([5, 1, 4, null, null, 3, 6]).root;
        const result = isValidBST(root);
        expect(result).toBeFalsy();
    });

    it('test case 3 Input: root = [3,1,4,null,null,2], output false ', () => {
        const root = new BinaryTree([3, 1, 4, null, null, 2]).root;
        const result = isValidBST(root);
        expect(result).toBeFalsy();
    });

    it('test case 4 Input: root = [2,1,3], output true ', () => {
        const root = new BinaryTree([2, 1, 3]).root;
        const result = inOrderTraversal(root, []);
        expect(result).toBeTruthy();
    });

    it('test case 5 Input: root = [5,1,4,null,null,3,6], output false ', () => {
        const root = new BinaryTree([5, 1, 4, null, null, 3, 6]).root;
        const result = inOrderTraversal(root, []);
        expect(result).toBeFalsy();
    });

    it('test case 6 Input: root = [3,1,4,null,null,2], output false ', () => {
        const root = new BinaryTree([3, 1, 4, null, null, 2]).root;
        const result = inOrderTraversal(root, []);
        expect(result).toBeFalsy();
    });
});
