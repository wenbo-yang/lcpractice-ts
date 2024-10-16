import { TreeNode } from "./commonLibs";

xdescribe('leetcode 653: two sum IV in a bst', () => {
    function findTarget(root: TreeNode | null, k: number): boolean {
        const sortedArray: number[] = []
        inorderTraversal(root, sortedArray);

        let l = 0;
        let r = sortedArray.length - 1;
        while(l < r) {
            if (sortedArray[l] + sortedArray[r] > k) {
                r--;
            }
            else if (sortedArray[l] + sortedArray[r] < k) {
                l++;
            }
            else {
                return true;
            }
        }

        return false;
    };


    function inorderTraversal(root: TreeNode | null, sortedArray: number[]) {
        if(!root) {
            return;
        }

        inorderTraversal(root.left, sortedArray);
        sortedArray.push(root.val);
        inorderTraversal(root.right, sortedArray);
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


