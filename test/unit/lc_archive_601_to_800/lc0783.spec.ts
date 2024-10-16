import {TreeNode} from './commonLibs';

xdescribe('leetcode 783: min difference between any two nodes', () => {
    function minDiffInBST(root: TreeNode | null): number {
        if (!root) {
            return Number.MAX_SAFE_INTEGER;
        }
        
        
        return minDiffInBSTHelper(root, Number.MAX_SAFE_INTEGER);

    };

    function minDiffInBSTHelper(root: TreeNode | null, parentValue: number): number {
        if (!root) {
            return Number.MAX_SAFE_INTEGER;
        }

        return Math.min(Math.abs(parentValue - root.val), minDiffInBSTHelper(root.left, root.val), minDiffInBSTHelper(root.right, root.val));
    }
    
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



