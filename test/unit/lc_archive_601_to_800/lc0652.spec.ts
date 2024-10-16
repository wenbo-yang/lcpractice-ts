import {TreeNode} from './commonLibs';

xdescribe('leetcode 652: description', () => {
    function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
        const map = new Map<number, TreeNode[]>();

        const result: TreeNode[] = [];
        preorderTraversal(root, map, result);

        return result;
    };

    function preorderTraversal(root: TreeNode | null, map: Map<number, TreeNode[]>, result: TreeNode[]) {
        if (!root) {
            return;
        }

        if (!map.has(root.val)) {
            map.set(root.val, []);
        }

        const candidates = map.get(root.val) || [];
        
        for (const c of candidates) {
            if (preorderTraversalHelper(root, c)) {
                result.push(root);
            }
        }
        candidates.push(root);
        map.set(root.val, candidates);
    }

    function preorderTraversalHelper(root: TreeNode | null, c: TreeNode | null): boolean {
        if (!root && !c) {
            return true;
        }

        if (!root || !c) {
            return false;
        }

        return root.val === c.val && preorderTraversalHelper(root.left, c.left) && preorderTraversalHelper(root.right, c.right);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





