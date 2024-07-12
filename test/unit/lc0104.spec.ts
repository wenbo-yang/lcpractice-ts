import { BinaryTree, TreeNode } from './commonLibs';

xdescribe('leetcode 104: max tree depth', () => {
    function maxDepth(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }

    it('test case 1 Input: root = [3,9,20,null,null,15,7], output 3 ', () => {
        const root = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;
        const result = maxDepth(root);

        expect(result).toEqual(3);
    });
});
