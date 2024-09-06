import { Queue, TreeNode } from './commonLibs';

xdescribe('leetcode 515: description', () => {
    function largestValues(root: TreeNode | null): number[] {
        if (!root) {
            return [];
        }

        const queue = new Queue<{ depth: number; node: TreeNode }>();

        queue.enque({ depth: 0, node: root });
        const result: number[] = [root.val];
        while (queue.length > 0) {
            const top = queue.deque() || { depth: Number.MIN_SAFE_INTEGER, node: root };

            if (top.depth === result.length) {
                result.push(Number.MIN_SAFE_INTEGER);
            }

            result[result.length - 1] = Math.max(result[result.length - 1], top.node.val);

            if (top.node.left) queue.enque({ depth: top.depth + 1, node: top.node.left });
            if (top.node.right) queue.enque({ depth: top.depth + 1, node: top.node.right });
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
