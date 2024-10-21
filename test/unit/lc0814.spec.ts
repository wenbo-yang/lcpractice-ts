import {TreeNode} from './commonLibs';

xdescribe('leetcode 814: description', () => {
    function pruneTree(root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }

        if (shouldRemove(root)) {
            return null;
        }

        return root;
    };


    function shouldRemove(root: TreeNode | null): boolean {
        if (!root) {
            return true;
        }

    
        if(shouldRemove(root.left)) {
            root.left = null;
        }

        if(shouldRemove(root.right)) {
            root.right = null;
        }

        if (root.val !== 1 && isLeafNode(root)) {
            return true;
        }
        
        return false;
    }

    function isLeafNode(root: TreeNode): boolean {
        return (root.left || root.right) === null;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



