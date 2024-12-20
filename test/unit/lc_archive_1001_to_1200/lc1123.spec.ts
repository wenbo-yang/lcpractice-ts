import {TreeNode} from './commonLibs';

xdescribe('leetcode 1123: lowest common ancestor of deepest leaves', () => {
    function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {

        return dfs(root)[0];
    }

    function dfs(root: TreeNode | null): [TreeNode | null, number] {
        if (root === null) {
            return [null, 0];
        }
        const [l, d1] = dfs(root.left);
        const [r, d2] = dfs(root.right);
        if (d1 > d2) {
            return [l, d1 + 1];
        }
        if (d1 < d2) {
            return [r, d2 + 1];
        }
        return [root, d1 + 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
