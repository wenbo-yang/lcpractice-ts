import { TreeNode } from './commonLibs';

xdescribe('leetcode 1161: maximum level sum of a binary tree', () => {
    function maxLevelSum(root: TreeNode | null): number {
        const levelSum: number[] = [];
        preorderTraversal(root, 1, levelSum);

        return levelSum.lastIndexOf(Math.max(...levelSum)) + 1;
    };

    function preorderTraversal(root: TreeNode | null, level: number, levelSum: number[]) {
        if (!root) {
            return;
        }

        if (level > levelSum.length) {
            levelSum.push(0);
        }

        levelSum[level - 1] += root.val;

        preorderTraversal(root.left, level + 1, levelSum);
        preorderTraversal(root.right, level + 1, levelSum);

    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


