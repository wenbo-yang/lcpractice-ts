import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1373: max sum BST in binary tree ', () => {
    function dfs(node: TreeNode | null, maxSum: {max: number}): [boolean, number, number, number] {
        const infinity = Number.MAX_SAFE_INTEGER;
      
        if (!node) {
            return [true, infinity, -infinity, 0];
        }
        const [isLeftBST, leftMin, leftMax, leftSum] = dfs(node.left, maxSum);
        const [isRightBST, rightMin, rightMax, rightSum] = dfs(node.right, maxSum);
      
        if (isLeftBST && isRightBST && leftMax < node.val && node.val < rightMin) {
            const sum = leftSum + rightSum + node.val;
            maxSum.max = Math.max(maxSum.max, sum); // Update maxSum if a new max is found.
            return [true, Math.min(leftMin, node.val), Math.max(rightMax, node.val), sum];
        }
      
        return [false, 0, 0, 0];
    }

    function longestZigZag(root: TreeNode | null): number {
        const maxSum: {max: number} = {max: Number.MIN_SAFE_INTEGER};
        dfs(root, maxSum);
        return maxSum.max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
