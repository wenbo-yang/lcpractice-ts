import { TreeNode } from "../commonLibs";

xdescribe('leetcode 938: range sum of bst', () => {
    function rangeSumBSTRecursive(root: TreeNode | null, low: number, high: number): number {
        if (!root) {
          return 0;
        }
      
        if (root.val >= low && root.val <= high) {
          return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
        } else if (root.val < low) {
          return rangeSumBST(root.right, low, high);
        } else {
          return rangeSumBST(root.left, low, high);
        }
      }

    function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
        const sortedArr: number[] = [];

        inorderTraversal(root, sortedArr);

        let sum = 0;

        for(const n of sortedArr) {
            if (n >= low && n <= high) {
                sum += n;
            }
            else if (n > high) {
                break;
            }
        }

        return sum;
    };

    function inorderTraversal(root: TreeNode | null, sortedArr: number[]) {
        if (!root) {
            return;
        }

        inorderTraversal(root, sortedArr);
        sortedArr.push(root.val);
        inorderTraversal(root, sortedArr);
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

