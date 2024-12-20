import {TreeNode} from './commonLibs'

xdescribe('leetcode 1080: sufficient subset', () => {
    function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
        if (root === null) {
            return null;
        }
    
        limit -= root.val;
    
        if (root.left === null && root.right === null) {
            return limit > 0 ? null : root;
        }
        
        root.left = sufficientSubset(root.left, limit);
        root.right = sufficientSubset(root.right, limit);
    
        if (root.left === null && root.right === null) {
            return null;
        }
        
        return root;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
