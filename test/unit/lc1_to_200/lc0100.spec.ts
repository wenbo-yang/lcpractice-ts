import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 100: is same tree', () => {
    function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (p === null && q === null) {
            return true;
        }

        if (!(p && q)) {
            return false;
        }

        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    it('test case 1 Input: p = [1,2,1], q = [1,1,2], output false', () => {
        const p = new BinaryTree([1, 2, 1]).root;
        const q = new BinaryTree([1, 1, 2]).root;

        const result = isSameTree(p, q);

        expect(result).toBeFalsy();
    });

    it('test case 1 Input: p = [1,2,3], q = [1,2,3], output true', () => {
        const p = new BinaryTree([1, 2, 3]).root;
        const q = new BinaryTree([1, 2, 3]).root;

        const result = isSameTree(p, q);

        expect(result).toBeTruthy();
    });
});
