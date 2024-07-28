import { BinaryTree, TreeNode } from './commonLibs';

xdescribe('leetcode 270: closes value from bst', () => {
    function closestBinarySearchTreeValue(root: TreeNode | null, target: number): number {
        if (!root) {
            return Number.MAX_SAFE_INTEGER;
        }

        const diff = root.val - target;

        if (diff > 0) {
            const closestValueFromLeft = closestBinarySearchTreeValue(root.left, target);
            return diff > Math.abs(closestValueFromLeft - target) ? closestValueFromLeft : root.val;
        }

        const closestValueFromRight = closestBinarySearchTreeValue(root.right, target);

        return Math.abs(diff) > Math.abs(closestValueFromRight - target) ? closestValueFromRight : root.val;
    }

    it('test case 1 Input: [4,2,5,1,3], target = 3.714, output 4', () => {
        const root = new BinaryTree([4, 2, 5, 1, 3]).root;
        expect(closestBinarySearchTreeValue(root, 3.714)).toEqual(4);
    });

    it('test case 2 Input: [4,2,5,1,3], target = 5.714, output 5', () => {
        const root = new BinaryTree([4, 2, 5, 1, 3]).root;
        expect(closestBinarySearchTreeValue(root, 5.714)).toEqual(5);
    });

    it('test case 3 Input: [4,2,5,1,3], target = 0.714, output 1', () => {
        const root = new BinaryTree([4, 2, 5, 1, 3]).root;
        expect(closestBinarySearchTreeValue(root, 0.714)).toEqual(1);
    });
});
