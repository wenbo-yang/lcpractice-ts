import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 114: flatten tree', () => {
    function flatten(root: TreeNode | null): void {
        const nodeArray: (TreeNode | null)[] = [];

        preorderTraversal(root, nodeArray);

        root = nodeArray[0];
        let tempRoot = root;
        let index = 1;
        while (index < nodeArray.length) {
            const top = nodeArray[index++];
            if (tempRoot) {
                tempRoot.left = null;
                tempRoot.right = top;
                tempRoot = tempRoot.right;
            }
        }
    }

    function preorderTraversal(root: TreeNode | null, nodeStack: (TreeNode | null)[]) {
        if (!root) {
            return;
        }

        nodeStack.push(root);
        preorderTraversal(root.left, nodeStack);
        preorderTraversal(root.right, nodeStack);
    }

    it('test case 1 root = [1,2,5,3,4,null,6], output [1,null,2,null,3,null,4,null,5,null,6]', () => {
        const root = new BinaryTree([1, 2, 5, 3, 4, null, 6]).root;
        flatten(root);
        const resultArray = BinaryTree.convertTreeNodeToArrayBfs(root);
        expect(resultArray).toEqual([1, null, 2, null, 3, null, 4, null, 5, null, 6]);
    });
});
