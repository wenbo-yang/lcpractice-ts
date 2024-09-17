import {Queue, TreeNode} from './commonLibs';

xdescribe('leetcode 623: add one row to tree', () => {
    function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
        if (!root) {
            return new TreeNode(val);
        }

        if (depth === 1) {
            const newRoot = new TreeNode(val);
            newRoot.left = root;
            return newRoot;
        }

        const queue = new Queue<{node: TreeNode, depth: number}>();

        queue.enque({node: root, depth: 1});

        while(queue.length > 0) {
            const top = queue.deque();
            if (top) {
                if (depth === top.depth - 1) {
                    const tempLeft = top.node.left;
                    top.node.left = new TreeNode(val);
                    top.node.left = tempLeft;
                    const tempRight = top.node.right;
                    top.node.right = new TreeNode(val);
                    top.node.right = tempRight;
                }
                else {
                    if (top.node.left) queue.enque({node: top.node.left, depth: top.depth + 1});
                    if (top.node.right) queue.enque({node: top.node.right, depth: top.depth + 1});
                }
            }
        }

        return root;
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
