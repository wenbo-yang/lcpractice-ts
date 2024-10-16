import {TreeNode} from './commonLibs';

xdescribe('leetcode 671: second miniumn', () => {
    function findSecondMinimumValue(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        const result: number[] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

        findMinHelper(root, result);

        return result[1];
    };

    function findMinHelper(root: TreeNode | null, result: number[]) {
        if (!root) {
            return;
        }

        if (root.val < result[0] && root.val < result[1]) {
            result[1] = result[0];
            result[0] = root.val;
        }

        if (root.val > result[0] && root.val < result[1]) {
            result[1] = root.val;
        }

        findMinHelper(root.left, result);
        findMinHelper(root.right, result);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


