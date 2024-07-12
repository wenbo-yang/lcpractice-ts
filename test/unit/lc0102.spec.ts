import { BinaryTree, Queue, TreeNode } from './commonLibs';

xdescribe('leetcode 102: binary Tree level order traversal', () => {
    function levelOrder(root: TreeNode | null): number[][] {
        if (!root) {
            return [[]];
        }

        const queue: Queue<{ node: TreeNode; depth: number }> = new Queue();

        queue.enqueue({ node: root, depth: 0 });
        const currentLevel = 0;
        const result: number[][] = [];

        while (queue.length > 0) {
            const top = queue.dequeue();

            if (top && top.depth === result.length) {
                result.push([]);
            }
            if (top && top.node) {
                result[result.length - 1].push(top?.node.val);
            }

            if (top && top.node && top.node.left) {
                queue.enqueue({ node: top.node.left, depth: top.depth + 1 });
            }

            if (top && top.node && top.node.right) {
                queue.enqueue({ node: top.node.right, depth: top.depth + 1 });
            }
        }

        return result;
    }

    it('test case 1 Input: root = [3,9,20,null,null,15,7], output [[3],[9,20],[15,7]]', () => {
        const root = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;

        const result = levelOrder(root);

        expect(result).toEqual([[3], [9, 20], [15, 7]]);
    });
});
