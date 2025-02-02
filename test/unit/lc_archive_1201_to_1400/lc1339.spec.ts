import {TreeNode} from './commonLibs';

xdescribe('leetcode 1339: maximum product of splitted binary tree', () => {
    function maxProduct(root: TreeNode | null): number {
        const total = postorderTraversal(root);
        const result: number[] = [0];

        traversal(root, total, result);

        return result[0];
    };

    function traversal(root: TreeNode | null, total: number, result: number[]) {
        if (!root) {
            return;
        }

        traversal(root.left, total, result);
        traversal(root.right, total, result);

        result[0] = Math.max(result[0], (total - root.val) * root.val);
    }

    function postorderTraversal(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        const left = postorderTraversal(root.left);
        const right = postorderTraversal(root.right);

        root.val = root.val + left + right;

        return root.val;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



