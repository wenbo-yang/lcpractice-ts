import {TreeNode} from './commonLibs';

xdescribe('leetcode 889: description', () => {
    
    function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {

        const postOrderIndexMap: { [key: number]: number } = {};
        postorder.forEach((value, index) => {
            postOrderIndexMap[value] = index;
          });
          // Call the recursive build function to construct the tree
        return buildTree(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1, postOrderIndexMap);
        
        
    };

    function createTreeNode(val: number, left: TreeNode | null = null, right: TreeNode | null = null): TreeNode {
        return {
          val,
          left,
          right,
        };
      }

    function buildTree(  preorder: number[],
        preStart: number,
        preEnd: number,
        postorder: number[],
        postStart: number,
        postEnd: number, postOrderIndexMap: { [key: number]: number; }): TreeNode | null {
            if (preStart > preEnd) return null;
    
        // The first value in preorder is the root node value
        const root = createTreeNode(preorder[preStart]);
    
        // If there is only one node, it is the root of the current subtree
        if (preStart === preEnd) return root;
    
        // Find the index of the root of the left subtree in postorder traversal using the map
        const leftRootIndex = postOrderIndexMap[preorder[preStart + 1]];
    
        // The length of the left subtree in the postorder array can be calculated from the indices
        const leftSubtreeLength = leftRootIndex - postStart + 1;
    
        // Recursively construct the left subtree
        root.left = buildTree(
            preorder,
            preStart + 1,
            preStart + leftSubtreeLength,
            postorder,
            postStart,
            leftRootIndex,
            postOrderIndexMap
        );
    
        // Recursively construct the right subtree
        root.right = buildTree(
            preorder,
            preStart + leftSubtreeLength + 1,
            preEnd,
            postorder,
            leftRootIndex + 1,
            postEnd - 1,
            postOrderIndexMap
        );
    
        // Return the root of the constructed subtree
        return root;
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


