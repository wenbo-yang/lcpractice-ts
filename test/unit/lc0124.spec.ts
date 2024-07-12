import { TreeNode } from './commonLibs';

xdescribe('leetcode 124: binaryTree max path', () => {
    function maxPathSum(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
        const currentResult: Map<string, number> = new Map();
        currentResult.set('r', Number.MIN_SAFE_INTEGER);
        maxPathSumHelper(root, currentResult);

        return currentResult.get('r') || 0;
    }

    function maxPathSumHelper(root: TreeNode | null, currentResult: Map<string, number>): number {
        if (!root) {
            return 0;
        }

        let left = Math.max(0, maxPathSumHelper(root.left, currentResult));
        let right = Math.max(0, maxPathSumHelper(root.right, currentResult));

        let currentSum = left + right + root.val;

        currentResult.set('r', Math.max(currentResult.get('r') || 0, currentSum));

        return Math.max(left, right) + root.val;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
