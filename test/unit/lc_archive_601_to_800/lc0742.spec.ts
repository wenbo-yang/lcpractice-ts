import {Queue, TreeNode} from './commonLibs';

xdescribe('leetcode 742: closest leaf node', () => {
    function closestLeafNode(root: TreeNode | null, k: number): number {
        if (!root) {
            return 0;
        }

        const nodeStack: (TreeNode | null)[] = [];
        const targetNode = findNode(root, k, nodeStack)

        nodeStack.reverse();
        

        if (targetNode) {
            const visited = new Set<TreeNode>();
            const queue = new Queue<TreeNode>();
            queue.enque(targetNode);
            while(queue.length > 0) {
                const top = queue.deque();

                if (top) {
                    if(isLeafNode(top)) {
                        return top.val;
                    }

                    visited.add(top);
                    const parent = nodeStack.pop();
                    const left = top.left;
                    const right = top.right;

                    if (parent && !visited.has(parent)) {
                        queue.enque(parent);
                    }
                    if (left && !visited.has(left)) {
                        queue.enque(left);
                    }
                    if (right && !visited.has(right)) {
                        queue.enque(right);
                    }
                }
            }
        }

        return 0;
    }

    function findNode(root: TreeNode | null, k: number, nodeStack: (TreeNode | null)[]): TreeNode | null {
        if (!root) {
            return null;
        }

        if (root.val === k) {
            return root;
        }
        
        const node = findNode(root.left, k, nodeStack) || findNode(root.right, k, nodeStack);
        nodeStack.push(root);
        
        return node;
    }

    function isLeafNode(top: TreeNode) {
        return top.left === top.right === null;
    }
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





