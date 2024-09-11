import { NTreeNode } from '../commonLibs';

xdescribe('leetcode 589: Ntree preorder traversal', () => {
    function nTreePreorderTraversal(root: NTreeNode): number[] {
        const result: number[] = [];

        inorderTraversal(root, result);

        return result;
    }

    function inorderTraversal(root: NTreeNode, result: number[]) {
        if (!root) {
            return;
        }

        result.push(root.val);

        for (const child of root.children) {
            inorderTraversal(child, result);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


