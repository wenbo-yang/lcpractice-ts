import { TreeNode } from "./commonLibs";

xdescribe('leetcode 654: description', () => {
    function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
        return constructTreeHelper(nums, 0, nums.length - 1);
    };

    function constructTreeHelper(nums: number[], l: number, r: number): TreeNode | null {
        if (l > r) {
            return null;
        }

        const maxIndex = findMaxIndexWithInBound(nums, l, r);
        const root = new TreeNode(nums[maxIndex]);
        root.left = constructTreeHelper(nums, l, maxIndex - 1);
        root.right = constructTreeHelper(nums, maxIndex + 1, r);

        return root;
    }

    function findMaxIndexWithInBound(nums: number[], l: number, r: number): number {
        let max = Number.MIN_SAFE_INTEGER;
        let maxIndex = 0;
        for (let i = l; i <= r; i++) {
            if (nums[i] > max) {
                maxIndex = i;
                max = nums[i];
            }
        }

        return maxIndex;
    }
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



