import { Queue, TreeNode } from "./commonLibs";

xdescribe('leetcode 637: average of levels of binary tree', () => {
    function averageOfLevels(root: TreeNode | null): number[] {
        if (!root) {
            return [];
        }
        const queue = new Queue<{node: TreeNode, depth: number}>();

        queue.enque({node:root, depth: 0});
        const sumAndCount: number[][] = [];
        
        while (queue.length) {
            const top = queue.deque();
            if (!top) break;

            if (sumAndCount.length === top.depth) {
                sumAndCount.push([0, 0]);
            }

            sumAndCount[top.depth][0] += top.node.val; 
            sumAndCount[top.depth][1]++;

            if (top.node.left) queue.enque({node: top.node.left, depth: top.depth + 1});            
            if (top.node.right) queue.enque({node: top.node.right, depth: top.depth + 1});
        }


        return sumAndCount.map( r => r[0] / r [1]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
