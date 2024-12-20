import {TreeNode} from './commonLibs';

xdescribe('leetcode 1038: bst to greater sum tree', () => {
    function bstToGst(root: TreeNode | null): TreeNode | null {
        let current = root;
        let totalSum = 0;
    
        while (current != null) {
            let rightNode = current.right;
        
            if (rightNode == null) {
                totalSum += current.val;      
                current.val = totalSum;       
                current = current.left;       
            } else {
                let leftMost = rightNode;
                while (leftMost.left != null && leftMost.left != current) {
                    leftMost = leftMost.left;
                }
            
                if (leftMost.left == null) {
                    leftMost.left = current;
                    current = rightNode;
                } else { 
                    leftMost.left = null;    
                    totalSum += current.val;  
                    current.val = totalSum;   
                    current = current.left;   
                }
            }
        }
    
        return root;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
