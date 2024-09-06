import { TreeNode } from './commonLibs';

xdescribe('leetcode 501: traverse tree', () => {
    function findMode(root: TreeNode | null): number[] {
        const array: number[] = [];
        inOrderTraversal(root, array);
        let maxCount = 0;
        let r = 0;
        let l = 0;
        const stack: { n: number; count: number }[] = [];
        while (r < array.length) {
            if (array[r] === array[l]) {
                maxCount = Math.max(r - l + 1, maxCount);
                r++;
            } else {
                while (stack.length !== 0 && stack[stack.length - 1].count < maxCount) {
                    stack.pop();
                }

                stack.push({ n: array[l], count: maxCount });
            }
        }

        return stack.map((it) => it.n);
    }

    function inOrderTraversal(root: TreeNode | null, array: number[]) {
        if (!root) {
            return null;
        }

        inOrderTraversal(root.left, array);
        array.push(root.val);
        inOrderTraversal(root.right, array);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
