import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1026: maximum difference between node and ancestor', () => {
    function maxAncestorDiff(root: TreeNode | null): number {
        let maxDifference: number[] = [0];
        if (root === null) {
            return 0;
        }
      
        dfs(root, root.val, root.val, maxDifference);
      
        return maxDifference[0];
    };

    function dfs(node: TreeNode | null, minVal: number, maxVal: number, maxDifference: number[]): void {
        if (!node) {
            return;
        }
      
        const potentialMaxDiff = Math.max(Math.abs(node.val - minVal), Math.abs(node.val - maxVal));
      
        maxDifference[0] = Math.max(maxDifference[0], potentialMaxDiff);
      
        const newMinVal = Math.min(minVal, node.val);
        const newMaxVal = Math.max(maxVal, node.val);
      
        dfs(node.left, newMinVal, newMaxVal, maxDifference);
        dfs(node.right, newMinVal, newMaxVal, maxDifference);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
