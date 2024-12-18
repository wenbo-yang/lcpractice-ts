import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1145: binary tree coloring game', () => {
    function btreeGameWinningMove(root: TreeNode | null, n: number, x: number): boolean {
        const xNode = findNodeWithValueX(root, x)!;
    
        const leftSubtreeNodeCount = countNodes(xNode.left);
        const rightSubtreeNodeCount = countNodes(xNode.right);
    
        const remainingNodes = n - leftSubtreeNodeCount - rightSubtreeNodeCount - 1;
    
        return Math.max(leftSubtreeNodeCount, rightSubtreeNodeCount, remainingNodes) > n / 2;
    };

    function findNodeWithValueX(node: TreeNode | null, x: number): TreeNode | null {
        if (!node || node.val === x) {
            return node;
        }

        // Traverse left and then right in search for the node.
        return findNodeWithValueX(node.left, x) || findNodeWithValueX(node.right, x);
    }

    function countNodes(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }
        return 1 + countNodes(node.left) + countNodes(node.right);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
