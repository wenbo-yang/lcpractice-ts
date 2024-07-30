import { BinaryTree, Queue, TreeNode } from '../commonLibs';

xdescribe('leetcode 199: binary tree side view', () => {
    function rightSideView(root: TreeNode | null): number[] {
        const queue: Queue<{ node: TreeNode | null; depth: number }> = new Queue();
        const result: number[] = [];

        let currentDepth = 0;

        queue.enque({ node: root, depth: 1 });

        while (queue.length > 0) {
            const top = queue.deque();
            const depth = top?.depth || 0;
            if (depth > currentDepth) {
                currentDepth = depth;
                result.push(top?.node?.val || Number.MIN_SAFE_INTEGER);
            }

            if (top?.node?.right) queue.enque({ node: top.node.right || null, depth: top.depth + 1 });
            if (top?.node?.left) queue.enque({ node: top.node.left || null, depth: top.depth + 1 });
        }

        return result;
    }

    it('test case 1 Input: [1,2,3,null,5,null,4], output [1,3,4] ', () => {
        const root = new BinaryTree([1, 2, 3, null, 5, null, 4]).root;

        const result = rightSideView(root);

        expect(result).toEqual([1, 3, 4]);
    });
});
