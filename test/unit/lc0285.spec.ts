import { TreeNode } from './commonLibs';

xdescribe('leetcode 285: in order successor of bst', () => {
    function inorderSuccessorInBinarySearchTree(root: TreeNode | null, target: number): number | null {
        if (!root) {
            return null;
        }

        const stack: (TreeNode | null)[] = [];
        let temp: TreeNode | null = root;

        while (temp) {
            stack.push(temp);
            if (temp.val === target) {
                break;
            }

            if (temp.val > target) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }

        if (stack[stack.length - 1]?.val !== target) {
            return null;
        }

        if ((stack[stack.length - 2]?.val || Number.MIN_SAFE_INTEGER) > target) {
            return stack[stack.length - 2]?.val || null;
        }

        return findSmallest(stack[stack.length - 1]?.right || null);
    }

    function findSmallest(root: TreeNode | null): number | null {
        if (!root) {
            return null;
        }

        if (isLeafNode(root)) {
            return root.val;
        }

        return findSmallest(root.left);
    }

    function isLeafNode(root: TreeNode | null): boolean {
        return !(root?.left || root?.right);
    }

    function inorderSuccessorInBinarySearchTreeRecurrsion(root: TreeNode | null, target: number): number | null {
        return helper(root, null, target);
    }

    function helper(root: TreeNode | null, parent: TreeNode | null, target: number): number | null {
        if (!root) {
            return null;
        }

        if (root.val === target) {
            if (!parent || parent.val < root.val) {
                return findSmallest(root.right);
            }
            return parent.val;
        }

        return root.val > target ? helper(root.left, root, target) : helper(root.right, root, target);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
