import { TreeNode } from '../commonLibs';

xdescribe('leetcode 563: binary tree tilt', () => {
    function findTilt(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        const result: { tilt: number; sum: number } = findTiltHelperPostorder(root);

        return result.tilt;
    }

    function findTiltHelperPostorder(root: TreeNode | null): { tilt: number; sum: number } {
        if (!root) {
            return { tilt: 0, sum: 0 };
        }

        const left = findTiltHelperPostorder(root.left) || { tilt: 0, sum: 0 };
        const right = findTiltHelperPostorder(root.right) || { tilt: 0, sum: 0 };

        return { tilt: left.tilt + right.tilt, sum: left.sum + right.sum };
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
