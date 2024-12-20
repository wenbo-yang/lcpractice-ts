import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1120: maximum average substree', () => {
    function maximumAverageSubtree(root: TreeNode | null): number {
        const { max } = postOrderTraversal(root);

        return max;
    } 

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
function postOrderTraversal(root: TreeNode | null): { max: number; average: number; count: number; } {
    if (!root) {
        return {max: Number.MIN_SAFE_INTEGER, average: 0, count: 0};
    }

    const left = postOrderTraversal(root.left);
    const right = postOrderTraversal(root.left);
    const totalCount = left.count + right.count + 1;
    const average = (left.average * left.count + right.average + right.count + root.val) / totalCount;
    
    return {max: Math.max(left.max, right.max, average), average: average, count: totalCount};
}

