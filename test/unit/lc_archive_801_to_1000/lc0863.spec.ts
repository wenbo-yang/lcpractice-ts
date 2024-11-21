import { TreeNode } from '../commonLibs'

xdescribe('leetcode 863: description', () => {
    function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
        if (!root || !target) {
            return [];
        }

        const parentStack: TreeNode[] = [];
        getParentStack(root, target, parentStack);

        const queue: {node: TreeNode | null, depth: number}[] = [];
        let index = 0;

        queue.push({node: target, depth: 0});
        const result: number[] = [];

        const visited = new Set<TreeNode | null>();
        while(index < queue.length) {
            const top = queue[index];

            visited.add(top.node);

            if (top.depth === k) {
                result.push(top.node?.val || -1);
            }
            
            if (top.depth > k) {
                break;
            }

            const parent = parentStack.pop();
            const left = top.node?.left;
            const right = top.node?.right;

            const next = [parent, left, right];

            for(const node of next) {
                const depth = top.depth + 1;
                if(node) {
                    queue.push({node, depth})
                }
            }
            
            index++;
        }

        return result;
    };

    function getParentStack(root: TreeNode | null, target: TreeNode | null, parentStack: TreeNode[]) {
        if (!root) {
            return;
        }

        if (root === target) {
            return;
        }

        parentStack.push(root);
        getParentStack(root.left, target, parentStack);
        getParentStack(root.right, target, parentStack);
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

