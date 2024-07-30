import { BinaryTree, TreeNode } from "../commonLibs";

xdescribe('leetcode 298: binary tree longest consecutive sequence', () => {
    function longestConsecutiveSequence(root: TreeNode | null): number {
        const result = [0]
        consecutiveSequence(root, null, 0, result);

        return result[0];
    }

    function consecutiveSequence(root: TreeNode | null, parent: TreeNode | null, current: number, result: number[]) {
        if (!root) {
            return;
        }

        if (parent && parent.val + 1 === root.val) {
            current++;
        }
        else {
            current = 1;
        }

        result[0] = Math.max(result[0], current);

        consecutiveSequence(root.left, root, current, result);
        consecutiveSequence(root.right, root, current, result);
    } 

    it('test case 1 Input: [1,null,3,2,4,null,null,null,5] output 3 ', () => {
        const root = new BinaryTree([1,null,3,2,4,null,null,null,5]).root;
        expect(longestConsecutiveSequence(root)).toEqual(3);
    });

    it('test case 2 Input: [2,null,3,2,null,1] output 3 ', () => {
        const root = new BinaryTree([2,null,3,2,null,1]).root;
        expect(longestConsecutiveSequence(root)).toEqual(2);
    });
});
