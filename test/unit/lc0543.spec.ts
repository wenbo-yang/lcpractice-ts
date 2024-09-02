import { TreeNode } from "./commonLibs";

xdescribe('leetcode 543: diameter of binary tree', () => {
    function diameterOfBinaryTree(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
     
        const result: number[] = [0, 0];

        diameterHelper(root, 0, result);

        return result[1] - result[0] + 1;
    };

    function diameterHelper(root: TreeNode | null, current: number, result: number[]) {
        if (!root) {
            return;
        }

        result[0] = Math.min(current, result[0]);
        result[1] = Math.max(current, result[1]);

        diameterHelper(root.left, current - 1, result);
        diameterHelper(root.right, current + 1, result);    
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


