import { NTreeNode, TreeNode } from '../commonLibs';

xdescribe('leetcode 431: encode decode n-nary tree', () => {
    function encode(root: NTreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }

        const res = new TreeNode(root.val);
        if (root.children && root.children.length > 0) {
            res.left = encode(root.children[0]);
        }

        let curr = res.left;
        for (let i = 1; i < root.children.length; i++) {
            if (curr) {
                curr.right = encode(root.children[i]);
                curr = curr.right;
            }
        }
        return res;
    }

    function decode(root: TreeNode): NTreeNode | null {
        if (!root) {
            return null;
        }

        const res = new NTreeNode(root.val);
        let curr = root.left;
        while (curr) {
            const child = decode(curr);
            if (child) {
                res.children.push(child);
            }

            curr = curr.right;
        }
        return res;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
