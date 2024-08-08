import { TreeNode } from '../commonLibs';

xdescribe('leetcode 235: find common ancestor of a binary search tree', () => {
    function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        const pVal = p?.val || Number.MAX_SAFE_INTEGER;
        const qVal = q?.val || Number.MAX_SAFE_INTEGER;

        const pStack: (TreeNode | null)[] = [];
        const qStack: (TreeNode | null)[] = [];

        findNode(root, pVal, pStack);
        findNode(root, qVal, qStack);

        let index = 0;

        while (index < pStack.length && index < qStack.length) {
            if (pStack[index] !== qStack[index]) {
                break;
            }
            index++;
        }

        return pStack[index - 1];
    }

    function findNode(root: TreeNode | null, val: number, stack: (TreeNode | null)[]) {
        if (!root) {
            return;
        }

        stack.push(root);

        if (root.val === val) {
            return;
        }

        if (val < root.val) {
            findNode(root.left, val, stack);
        }

        findNode(root.right, val, stack);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
