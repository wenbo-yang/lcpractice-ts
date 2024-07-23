import {TreeNode} from './commonLibs';

xdescribe('leetcode 230: description', () => {
    function kthSmallest(root: TreeNode | null, k: number): number {
        if (!root) {
            return 0;
        }

        const result: number[] = [-1];
        const currentCount: number[] = [0];
        kthSmallestHelper(root, k, currentCount, result);

        return result[0];
    };

    function kthSmallestHelper(root: any, k: number, currentCount: number[], result: number[]): number {
        if (!root) {
            return 0;
        }

        const leftCount = kthSmallestHelper(root.left, k, currentCount, result);
        if (leftCount === -1) {
            return -1;
        }

        currentCount[0] = leftCount + 1;

        if (currentCount[0] === k) {
            result[0] = root.val;
            return -1;
        }

        const rightCount = kthSmallestHelper(root.right, k, currentCount, result);

        if (rightCount === -1) {
            return -1;
        }

        currentCount[0] = currentCount[0] + rightCount;

        return currentCount[0];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

