import { TreeNode } from "./commonLibs";

xdescribe('leetcode 333: largest bst subtree', () => {
    function largestBSTSubtree(root: TreeNode | null) : number {
        const result: number[] = [0];
        inorderTraversal(root, result);
        return Math.max(...result)
    }

    function inorderTraversal(root: TreeNode | null, result:number[]): {min: number, max: number, size: number} {
        if (!root) {
            return {min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, size: 0};
        }

        if (!root.left && !root.right) {
            return {min: root.val, max: root.val, size: 1}
        }

        if (root.left && root.right) {
            const left = inorderTraversal(root.left, result);
            const right = inorderTraversal(root.right, result);

            if (left.max < root.val && right.min >= root.val) {
                result.push(left.size + right.size + 1)
                return { min: left.min, max: right.max, size: left.size + right.size + 1}
            }

            return {min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, size: 0};
        }
        
        if (root.left) {
            const left = inorderTraversal(root.left, result);

            if (left.max < root.val) {
                result.push(left.size + 1);
                return { min: left.min, max: root.val, size: left.size + 1};
            }

            return {min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, size: 0};
        }
             
        const right = inorderTraversal(root.right, result);
        if (right.min < root.val) {
            result.push(right.size + 1);
            return { min: root.val, max: right.max, size: right.size + 1};
        }

        return {min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, size: 0};

    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



