import { BinaryTree, Queue, TreeNode } from './commonLibs';

xdescribe('leetcode 107: reverse Binary Tree Level Order Traversal II', () => {
    function levelOrderBottom(root: TreeNode | null): number[][] {
        if (!root) {
            return [[]];
        }

        const queue: Queue<{ node: TreeNode; depth: number }> = new Queue();

        queue.enque({ node: root, depth: 0 });
        const currentLevel = 0;
        const result: number[][] = [];

        while (queue.length > 0) {
            const top = queue.deque();

            if (top && top.depth === result.length) {
                result.push([]);
            }
            if (top && top.node) {
                result[result.length - 1].push(top?.node.val);
            }

            if (top && top.node && top.node.left) {
                queue.enque({ node: top.node.left, depth: top.depth + 1 });
            }

            if (top && top.node && top.node.right) {
                queue.enque({ node: top.node.right, depth: top.depth + 1 });
            }
        }

        return result.reverse();
    }

    it('test case 1 Input: root = [3,9,20,null,null,15,7],output  [[15,7],[9,20],[3]] ', () => {
        const root = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;
        const result = levelOrderBottom(root);
        expect(result).toEqual([[15, 7], [9, 20], [3]]);
    });
});
