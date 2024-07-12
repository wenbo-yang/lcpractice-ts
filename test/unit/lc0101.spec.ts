import { TreeNode } from './commonLibs';

xdescribe('leetcode 101: symetric tree', () => {
    function isSymmetric(root: TreeNode | null): boolean {
        return isSymmetricHelperRecurse(root, root);
    }

    function isSymmetricHelperRecurse(root1: TreeNode | null, root2: TreeNode | null): boolean {
        if (!root1 && !root2) {
            return true;
        }

        if (!root1 || !root2) {
            return false;
        }

        return root1.val === root2.val && isSymmetricHelperRecurse(root1.left, root2.right) && isSymmetricHelperRecurse(root1.right, root2.left);
    }

    function isSymmetricQueue(root: TreeNode | null) {
        if (root === null) {
            return true;
        }

        const queue = pushTreeToQueue(root);

        let l = 0;
        let r = 0;

        while (r < queue.length) {
            if (queue[r].depth === 0) {
                r++;
                l = r;
                continue;
            }

            if (queue[r].depth !== queue[l].depth) {
                if (!isSymmetricHelperQueue(queue, l, r - 1)) {
                    return false;
                }
                l = r;
            }

            r++;
        }

        return true;
    }

    function isSymmetricHelperQueue(queue: { node: TreeNode | null; depth: number }[], l: number, r: number): boolean {
        if ((l + r) % 2 == 0) {
            return false;
        }
        while (l < r) {
            if (!queue[l].node || !queue[l].node) {
                return false;
            }

            if ((!queue[l].node && !queue[r].node) || queue[l].node?.val !== queue[r].node?.val) {
                l++;
                r--;
            } else {
                return false;
            }
        }

        return true;
    }

    function pushTreeToQueue(node: TreeNode | null): { node: TreeNode | null; depth: number }[] {
        const queue: { node: TreeNode | null; depth: number }[] = [];
        queue.push({ node, depth: 0 });
        let queueIndex = 0;
        while (queueIndex !== queue.length) {
            const node = queue[queueIndex].node;
            if (node?.left || node?.right) {
                queue.push({ node: node.left, depth: queue[queueIndex].depth + 1 });
                queue.push({ node: node.right, depth: queue[queueIndex].depth + 1 });
            }
            queueIndex++;
        }

        return queue;
    }

    it('test case 1 input root = [1,2,2,3,4,4,3] output true', () => {});
});
