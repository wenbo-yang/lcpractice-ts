import { TreeNode } from './commonLibs';

xdescribe('leetcode 1315: sum of nodes with even valued grand parent', () => {
    function sumEvenGrandparent(root: TreeNode | null): number {
        const result: {r: number} = {r: 0};

        preorderTraversal(root, 1, 1, result);

        return result.r;
    };

    function preorderTraversal(root: TreeNode | null, parent: number, grandParent: number, result: {r: number}) {
        if (!root) {
            return;
        }

        if (grandParent % 2 === 0) {
            result.r += root.val;
        }

        preorderTraversal(root.left, root.val, parent, result);
        preorderTraversal(root.right, root.val, parent, result);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


