import { TreeNode } from './commonLibs';

xdescribe('leetcode 236: lowest common ancestor of a binary tree', () => {
    function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }

        const pStack: (TreeNode | null)[] = [];
        const qStack: (TreeNode | null)[] = [];

        findNode(root, p, pStack);
        findNode(root, q, qStack);

        let index = 0;

        pStack.reverse();
        qStack.reverse();

        while (index < pStack.length && index < qStack.length) {
            if (pStack[index] !== qStack[index]) {
                break;
            }
            index++;
        }

        return pStack[index - 1];
    }

    function findNode(root: TreeNode | null, targetNode: TreeNode | null, stack: (TreeNode | null)[]): boolean {
        if (!root) {
            return false;
        }

        if (root === targetNode || findNode(root.left, targetNode, stack) || findNode(root.right, targetNode, stack)) {
            stack.push(root);
            return true;
        }

        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
