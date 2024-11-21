import { TreeNode } from "../commonLibs";

xdescribe('leetcode 987: vertical order traversal', () => {
    function verticalTraversal(root: TreeNode | null): number[][] {
        const nodesGroupedByVertical: number[][] = [];
        depthFirstSearch(root, 0, 0, nodesGroupedByVertical);
        nodesGroupedByVertical.sort(nodeComparator);

        const verticalOrder:number[][] = [];
        let previousIndex = Number.MIN_SAFE_INTEGER;

        // Group sorted nodes into subarrays based on their vertical index
        for (let node of nodesGroupedByVertical) {
            const [nodeValue, , verticalIndex] = node;
            if (verticalIndex !== previousIndex) {
            verticalOrder.push([]);
            previousIndex = verticalIndex;
            }
            verticalOrder[verticalOrder.length - 1].push(nodeValue);
        }
        return verticalOrder;
    };

    function nodeComparator(a: Array<number>, b: Array<number>): number {
        const [valueA, depthA, indexA] = a;
        const [valueB, depthB, indexB] = b;
      
        if (indexA === indexB) {
          if (depthA === depthB) {
            return valueA - valueB;
          }
          return depthA - depthB;
        }
        return indexA - indexB;
    }
    
    function depthFirstSearch(node: TreeNode | null, depth: number, verticalIndex: number, solution: Array<Array<number>>): void {
        if (!node) return;
      
        solution.push([node.val, depth, verticalIndex]);
      
        // Traverse the left subtree
        depthFirstSearch(node.left, depth + 1, verticalIndex - 1, solution);
        // Traverse the right subtree
        depthFirstSearch(node.right, depth + 1, verticalIndex + 1, solution);
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
