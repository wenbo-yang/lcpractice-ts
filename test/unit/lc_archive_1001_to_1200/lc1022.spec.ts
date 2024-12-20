import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1022: sum of root to leaf bibary numbers', () => {
    function sumRootToLeaf(root: TreeNode | null): number {
        return depthFirstSearch(root, 0);
    };

    function depthFirstSearch(node: TreeNode | null, currentNumber: number): number {
        if (node === null) {
          return 0;
        }
    
        currentNumber = (currentNumber << 1) | node.val;
    
        if (node.left === null && node.right === null) {
          return currentNumber;
        }
    
        return depthFirstSearch(node.left, currentNumber) + depthFirstSearch(node.right, currentNumber);
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
