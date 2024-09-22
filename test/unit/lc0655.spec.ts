import { TreeNode } from "./commonLibs";

xdescribe('leetcode 655: print binary tree', () => {
    function printTree(root: TreeNode | null): string[][] {
        if (!root) {
            return [];
        }

        const depth = getDepth(root);

        const result = new Array<Array<string>>(depth).fill([]).map(r => r = new Array<string>(Math.pow(2, depth) - 1).fill(''));

        preorderTraversal(root, result, 0, 0, result[0].length - 1);

        return result;
    };


    function preorderTraversal(root: TreeNode | null, result: string[][], row: number, l: number, r: number) {
        if (!root) {
            return;
        }

        const pivot = (r + l) / 2;
        result[row][pivot] = root.val.toString();

        preorderTraversal(root.left, result, row + 1, l, pivot - 1);
        preorderTraversal(root.right, result, row + 1, pivot + 1, r);
    }

    function getDepth(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
        return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





