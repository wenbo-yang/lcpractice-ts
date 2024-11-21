import { TreeNode } from "../commonLibs";

xdescribe('leetcode 865: subtree with all deepest node', () => {
    function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }
        
        const queue: {node: TreeNode | null, depth: number, parentStack: Set<TreeNode | null>} [] = [{node: root, depth: 0, parentStack: new Set<TreeNode | null>(null) }];

        let index = 0;

        while (index < queue.length) {
            const top = queue[index];
            const curr = top.node;
            top.parentStack.add(top.node);

            if (curr?.left) {
                const parentStack = new Set<TreeNode | null>(top.parentStack);
                queue.push({node: curr.left, depth: top.depth + 1, parentStack});
            }


            if (curr?.right) {
                const parentStack = new Set<TreeNode | null>(top.parentStack);
                queue.push({node: curr.right, depth: top.depth + 1, parentStack});
            }

            index++;
        }


        const parents = queue[queue.length - 1].parentStack;

        for (const parent of parents) {
            let found = true;
            while(queue[index].depth === queue[queue.length - 1].depth) {
                if(queue[index].parentStack.has(parent)) {
                    found = true;
                }
                else {
                    found = false;
                    break;
                }
                index--;
            }

            if (found) {
                return parent;
            }

        }

        return root;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
