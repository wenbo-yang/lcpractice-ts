import { NTreeNode, Queue } from '../commonLibs';

xdescribe('leetcode 429: level order traveral ', () => {
    function levelOrder(root: NTreeNode | null): number[][] {
        if (!root) {
            return [];
        }

        const queue = new Queue<{ node: NTreeNode; depth: number }>();
        queue.enque({ node: root, depth: 1 });
        const result: number[][] = [];
        while (queue.length !== 0) {
            const top = queue.deque();
            if (top) {
                if (result.length < top.depth) {
                    result.push([]);
                }
                result[result.length - 1].push(top.node.val);

                const children = top.node.children;

                for (const child of children) {
                    queue.enque({ node: child, depth: top.depth + 1 });
                }
            }
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
