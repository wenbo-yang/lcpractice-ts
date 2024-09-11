import { TreeNode } from '../commonLibs';

xdescribe('leetcode 530: min abs diff in bst', () => {
    function getMinimumDifference(root: TreeNode | null): number {
        const arr: number[] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
        inOrderTraversal(root, arr);

        return arr[0];
    }

    function inOrderTraversal(root: TreeNode | null, arr: number[]) {
        if (!root) {
            return;
        }

        inOrderTraversal(root.left, arr);
        arr.push(root.val);
        arr[0] = Math.min(arr[0], Math.abs(arr[arr.length - 2] - arr[arr.length - 1]));
        inOrderTraversal(root.right, arr);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
