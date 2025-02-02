import { TreeNode } from './commonLibs';

xdescribe('leetcode 1214: two sum bst', () => {
    function twoSumBSTs(root1: TreeNode | null, root2: TreeNode | null, target: number): boolean {
        const set1 = new Set<number>();

        inorderTraversal(root1, set1);
        
        return preorderTraversalFindTarget(root2, set1, target);
    }

    function inorderTraversal(root: TreeNode | null, set1: Set<number>) {
        if (!root) {
            return;
        }

        inorderTraversal(root.left, set1);
        set1.add(root.val);
        inorderTraversal(root.right, set1);
    }

    function preorderTraversalFindTarget(root: TreeNode | null, set1: Set<number>, target: number): boolean {
        if (!root) {
            return false;
        }

        return set1.has(target - root.val) || preorderTraversalFindTarget(root.left, set1, target) || preorderTraversalFindTarget(root.right, set1, target);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




