import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1372: longest zigzag path in a binary tree', () => {
    function longestZigZag(root: TreeNode | null): number {
        const result: {max: number} = {max: 0};

        if (root) {
            preorderTraversal(root.left, 0, 'l', result);
            preorderTraversal(root.right, 0, 'r', result);
        }
        
        return result.max;
    };

    function preorderTraversal(node: TreeNode | null, current: number, prevDirection: string, result: { max: number; }) {
        if (!node) {
            return;
        }

        current++; // 1
        result.max = Math.max(result.max, current);

        if (prevDirection === 'l') {
            preorderTraversal(node.right, current, 'r', result);
            preorderTraversal(node.left, 0, 'l', result);
        }
        else {
            preorderTraversal(node.left, current, 'l', result);
            preorderTraversal(node.right, 0, 'r', result);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


