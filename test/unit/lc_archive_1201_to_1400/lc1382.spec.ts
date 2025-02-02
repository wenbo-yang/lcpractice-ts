import {TreeNode} from './commonLibs';

xdescribe('leetcode 1382: balance a binary search tree', () => {

    function balanceBST(root: TreeNode | null): TreeNode | null {
        const values: number[] = [];
        inorderTraversal(root, values);

        return rebuildTree(0, values.length - 1, values);
    };

    function inorderTraversal(node: TreeNode | null, values: number[]): void {
        if (node === null) return;
        inorderTraversal(node.left, values);
        values.push(node.val);
        inorderTraversal(node.right, values);
    }


    function rebuildTree(start: number, end: number, values: number[]): TreeNode | null {
        if (start > end) return null; // Base case: no nodes to construct the tree

        // Calculate the middle index and use it as the root to balance the tree
        const mid = start + Math.floor((end - start) / 2);
        const newNode = new TreeNode(values[mid]); // Create a new node with the mid value

        // Recursively construct the left and right subtrees and link them to the new node
        newNode.left = rebuildTree(start, mid - 1, values);
        newNode.right = rebuildTree(mid + 1, end, values);
    
        return newNode; // Return the new subtree root
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
