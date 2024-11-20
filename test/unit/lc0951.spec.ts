import {TreeNode} from './commonLibs';

xdescribe('leetcode 951: flip equivalent binary trees', () => {
    function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
        return isFlipEquivalent(root1, root2);
    };

    function isFlipEquivalent(root1: TreeNode | null, root2: TreeNode | null): boolean {
        if (root1 === root2) return true;
      
        if (!root1 || !root2 || root1.val !== root2.val) return false;
      
        return (isFlipEquivalent(root1.left, root2.left) && isFlipEquivalent(root1.right, root2.right)) ||
               (isFlipEquivalent(root1.left, root2.right) && isFlipEquivalent(root1.right, root2.left));
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
