import { TreeNode } from '../commonLibs';

xdescribe('leetcode 404: description', () => {
    function sumOfLeftLeaves(root: TreeNode | null): number {
        const result = [0];

        sumOfLeftLeavesHelper(root, false, result);

        return result[0];
    }

    function sumOfLeftLeavesHelper(root: TreeNode | null, isLeft: boolean, result: number[]) {
        if (!root) {
            return;
        }

        if (isLeafNode(root)) {
            return isLeft ? root.val : 0;
        }

        sumOfLeftLeavesHelper(root.left, true, result);
        sumOfLeftLeavesHelper(root.right, false, result);
    }

    function isLeafNode(root: TreeNode): boolean {
        return !root.left && !root.right;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
