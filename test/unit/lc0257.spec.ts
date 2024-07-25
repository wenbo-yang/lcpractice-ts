import { BinaryTree, TreeNode } from './commonLibs';

xdescribe('leetcode 257: binary tree path', () => {
    function binaryTreePaths(root: TreeNode | null): string[] {
        const results: string[] = [];
        const currentStack: number[] = [];

        inOrderTraversal(root, currentStack, results);

        return results;
    }

    function inOrderTraversal(root: TreeNode | null, currentStack: number[], results: string[]) {
        if (!root) {
            return;
        }

        currentStack.push(root.val);

        if (isLeaf(root)) {
            results.push(currentStack.join('->'));
        } else {
            inOrderTraversal(root.left, currentStack, results);
            inOrderTraversal(root.right, currentStack, results);
        }

        currentStack.pop();
    }

    function isLeaf(root: TreeNode | null) {
        return !(root?.left || root?.right);
    }

    it('test case 1 Input:, [1,2,3,null,5], output ["1->2->5","1->3"] ', () => {
        const root = new BinaryTree([1, 2, 3, null, 5]).root;

        expect(binaryTreePaths(root)).toEqual(['1->2->5', '1->3']);
    });
});
