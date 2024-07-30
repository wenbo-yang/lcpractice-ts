import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 110: balanced tree', () => {
    function isBalanced(root: TreeNode | null): boolean {
        if (!root) {
            return true;
        }

        return getHeight(root) !== Number.MAX_SAFE_INTEGER;
    }

    function getHeight(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }

        const left = getHeight(node.left);
        const right = getHeight(node.right);

        if (left === Number.MAX_SAFE_INTEGER || right === Number.MAX_SAFE_INTEGER || Math.abs(right - left) >= 2) {
            return Number.MAX_SAFE_INTEGER;
        }

        return Math.max(left, right) + 1;
    }

    it('test case 1 Input: root = [3,9,20,null,null,15,7], output = true ', () => {
        const root = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;

        const result = isBalanced(root);

        expect(result).toBeTruthy();
    });

    it('test case 2 Input: root = [1,2,2,3,3,null,null,4,4], output = false ', () => {
        const root = new BinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]).root;

        const result = isBalanced(root);

        expect(result).toBeFalsy();
    });
});
