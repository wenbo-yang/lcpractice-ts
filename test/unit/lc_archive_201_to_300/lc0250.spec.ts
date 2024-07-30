import { TreeNode } from '../commonLibs';

xdescribe('leetcode 250: description', () => {
    function countUnivalueSubTrees(root: TreeNode | null): number {
        const result: number[] = [0];
        isUnivalueTree(root, result);

        return result[0];
    }

    function isUnivalueTree(root: TreeNode | null, result: number[]): boolean {
        if (!root) {
            return true;
        }

        const isLeftUnivalue = isUnivalueTree(root.left, result);
        const leftValue = root.left ? root.left.val : root.val;

        const isRightUnivalue = isUnivalueTree(root.right, result);
        const rightValue = root.right ? root.right.val : root.val;

        if (isLeftUnivalue && isRightUnivalue && root.val === leftValue && root.val === rightValue) {
            result[0]++;
            return true;
        }

        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
