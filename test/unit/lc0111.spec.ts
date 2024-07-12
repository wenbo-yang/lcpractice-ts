import { BinaryTree, TreeNode } from './commonLibs';

xdescribe('leetcode 111: min depth of binary tree', () => {
    function minDepth(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        if (!root.left && !root.right) {
            // leaf node
            return 1;
        }

        const left = root.left ? minDepth(root.left) : Number.MAX_SAFE_INTEGER;
        const right = root.right ? minDepth(root.right) : Number.MAX_SAFE_INTEGER;

        return Math.min(left, right) + 1;
    }

    it('test case 1 Input: root = [3,9,20,null,null,15,7], utput 2 ', () => {
        const root = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;

        const result = minDepth(root);

        expect(result).toEqual(2);
    });

    it('test case 2 Input: root = [2,null,3,null,4,null,5,null,6], utput 2 ', () => {
        const root = new BinaryTree([2, null, 3, null, 4, null, 5, null, 6]).root;

        const result = minDepth(root);

        expect(result).toEqual(5);
    });
});
