import { TreeNode } from "../commonLibs";

xdescribe('leetcode 971: flip binary tree to match preorder traversal', () => {
    function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
        const isPossible: boolean[] = [true]; 
        const currentIndex: number = 0; 
        const flippedNodes: number[] = []; 

        dfs(root, isPossible, currentIndex, flippedNodes, voyage); 
        return isPossible[0] ? flippedNodes : [-1]; 
    };

    function dfs(node: TreeNode | null, isPossible: boolean[], currentIndex: number, flippedNodes: number[], voyage: number[]): void {
        if (!node || !isPossible) {
          return;
        }
      
        if (node.val !== voyage[currentIndex++]) {
          isPossible[0] = false;
          return;
        }
    
        if (node.left && node.left.val !== voyage[currentIndex]) {
          flippedNodes.push(node.val);
          dfs(node.right, isPossible, currentIndex, flippedNodes, voyage);
          dfs(node.left, isPossible, currentIndex, flippedNodes, voyage);
        } else {
          dfs(node.left, isPossible, currentIndex, flippedNodes, voyage);
          dfs(node.right, isPossible, currentIndex, flippedNodes, voyage);
        }
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
