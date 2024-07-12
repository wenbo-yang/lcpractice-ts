import { BinaryTree, Queue, TreeNode } from './commonLibs';
xdescribe('leetcode 103: zigzag order', () => {
    // if reverse in the same level
    //   1
    //  2  3
    // 4 5 6 7
    //9 8   10 11
    // 1
    // 3 2
    // 4 5 6 7
    // 11 10 8 9

    function zigzagLevelOrder(root: TreeNode | null): number[][] {
        if (!root) {
            return [];
        }

        const queue: Queue<{ node: TreeNode | null; depth: number }> = new Queue();
        queue.enqueue({ node: root, depth: 0 });
        const result: number[][] = [];
        let zigzagFlag = false;
        while (queue.length > 0) {
            const top = queue.dequeue();
            if (result.length === top?.depth) {
                result.push([]);
                zigzagFlag = !zigzagFlag;
            }

            if (top && top.node) {
                result[result.length - 1].push(top.node.val);

                let first: TreeNode | null = null;
                let second: TreeNode | null = null;

                if (zigzagFlag) {
                    // enqueue right first
                    first = top.node.right;
                    second = top.node.left;
                } else {
                    first = top.node.left;
                    second = top.node.right;
                }

                if (first) queue.enqueue({ node: first, depth: top.depth + 1 });
                if (second) queue.enqueue({ node: second, depth: top.depth + 1 });
            }
        }

        return result;
    }

    it('test case 1 Input: root = [3,9,20,null,null,15,7], output [[3],[20,9],[15,7]]', () => {
        const root = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;

        const result = zigzagLevelOrder(root);

        expect(result).toEqual([[3], [20, 9], [15, 7]]);
    });
});
