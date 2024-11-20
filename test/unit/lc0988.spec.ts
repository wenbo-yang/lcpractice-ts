import { TreeNode } from "./commonLibs";

xdescribe('leetcode 988: SMALLEST string starting from leaf', () => {
    function smallestFromLeaf(root: TreeNode | null): string {
        const path: string[] = [];
        const smallestLeafString: string[] = []
        // Start the DFS traversal.
        dfs(root, path, smallestLeafString);
        // Return the smallest string after traversing the whole tree.
        return smallestLeafString.join();         
    }; 

    function dfs(node: TreeNode | null, path: string[], smallestLeafString: string[]): void {
        if (!node) return;
    
        path.push(String.fromCharCode('a'.charCodeAt(0) + node.val));
    
         if (!node.left && !node.right) {
            const pathReversed = Array.from(path).reverse();
            
            if (!smallestLeafString || pathReversed.join() < smallestLeafString.join()) {
                smallestLeafString = pathReversed;
            }
        }
    
        // Continue the DFS traversal for both children.
        if (node.left) dfs(node.left, path, smallestLeafString);
        if (node.right) dfs(node.right, path, smallestLeafString);
    
        // Backtrack: Remove the last character as we return to the previous node.
        path = path.splice(0, path.length - 1);
    }

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
