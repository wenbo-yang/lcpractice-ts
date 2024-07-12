import { TreeNode } from './commonLibs';

xdescribe('leetcode number: name', () => {
    function sortedArrayToBST(nums: number[]): TreeNode | null {
        return constructBinarySearchTree(nums, 0, nums.length - 1);
    }

    function constructBinarySearchTree(nums: number[], l: number, r: number): TreeNode | null {
        if (l > r) {
            return null;
        }

        const pivot = Math.floor((r - l) / 2);

        const root = new TreeNode(nums[pivot]);

        root.left = constructBinarySearchTree(nums, l, pivot - 1);
        root.right = constructBinarySearchTree(nums, pivot + 1, r);

        return root;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
