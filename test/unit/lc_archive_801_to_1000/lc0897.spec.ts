import {TreeNode} from '../commonLibs';

xdescribe('leetcode 897: increasing order search tree', () => {
    function increasingBST(root: TreeNode | null): TreeNode | null {
        const stack: (TreeNode | null)[] = []; 

        inorderTraversal(root, stack);
        
        for (let i = 0; i < stack.length; i++) {
            let temp = stack[i];
            if (temp) {
                temp.left = null;
                temp.right = stack[i + 1] || null;
            }
        }

        return stack[0];
        
    };

    function inorderTraversal(root: TreeNode | null, stack: (TreeNode | null)[]) {
        if (!root) {
            return;
        }

        inorderTraversal(root.left, stack);
        stack.push(root);
        inorderTraversal(root.right, stack);
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

