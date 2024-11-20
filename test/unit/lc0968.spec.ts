import { TreeNode } from "./commonLibs";

xdescribe('leetcode 968: binary tree cameras', () => {
    function minCameraCover(root: TreeNode | null): number {
        const [minWithRootCamera, minWithoutRootCamera, _] = depthFirstSearch(root);
        return Math.min(minWithRootCamera, minWithoutRootCamera);
    };

    function depthFirstSearch(node: TreeNode | null): number[] {
        if (!node) {
            return [Infinity, 0, 0];
        }
        const [leftMinWithCamera, leftMinWithoutCamera, leftCoveredByParent] = depthFirstSearch(node.left);
        const [rightMinWithCamera, rightMinWithoutCamera, rightCoveredByParent] = depthFirstSearch(node.right);

        const minWithCamera = 1 + Math.min(leftMinWithCamera, leftMinWithoutCamera, leftCoveredByParent) +
                                Math.min(rightMinWithCamera, rightMinWithoutCamera, rightCoveredByParent);

        const minWithoutCamera = Math.min(leftMinWithCamera + rightMinWithCamera,
                                          leftMinWithCamera + rightMinWithoutCamera,
                                          leftMinWithoutCamera + rightMinWithCamera);

        const coveredByParent = leftMinWithoutCamera + rightMinWithoutCamera;

        return [minWithCamera, minWithoutCamera, coveredByParent];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
