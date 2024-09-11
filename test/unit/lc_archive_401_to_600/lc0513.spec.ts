import { Queue, TreeNode } from '../commonLibs';

xdescribe('leetcode 513: description', () => {
    function findBottomLeftValue(root: TreeNode | null): number {
        if (!root) {
            return Number.MIN_SAFE_INTEGER;
        }

        const queue = new Queue<{ depth: number; node: TreeNode | null }>();
        let leftMost = { depth: 0, value: root.val };

        queue.enque({ depth: 0, node: root });

        while (queue.length > 0) {
            let curr = queue.deque() || { depth: 0, node: root };
            update(leftMost, curr);

            if (curr.node) {
                if (curr.node.left) queue.enque({ depth: curr.depth + 1, node: curr.node.left });
                if (curr.node.right) queue.enque({ depth: curr.depth + 1, node: curr.node.right });
            }
        }

        return leftMost.value;
    }

    function update(leftMost: { depth: number; value: number }, curr: { depth: number; node: TreeNode | null }) {
        if (leftMost.depth < curr.depth) {
            leftMost.depth = curr.depth;
            leftMost.value = curr.node?.val || Number.MIN_SAFE_INTEGER;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
