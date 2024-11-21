import { TreeNode } from "../commonLibs";

xdescribe('leetcode 979: distribute coins in binary tree', () => {

    function distributeCoins(root: TreeNode | null): number {
        const totalMoves: number[] = [0];
        dfs(root, totalMoves);
        return totalMoves[0];
    };

    function dfs(node: TreeNode | null, totalMoves: number[]): number {
        if (!node) {
            return 0;
        }

        const leftExcessCoins = dfs(node.left, totalMoves);
        const rightExcessCoins = dfs(node.right, totalMoves);

        totalMoves[0] += Math.abs(leftExcessCoins) + Math.abs(rightExcessCoins);
    
        return leftExcessCoins + rightExcessCoins + node.val - 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
