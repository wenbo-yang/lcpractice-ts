import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1379: find a corresponding bode of a binary tree in a clone of that tree', () => {
    function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
        if (!original || !cloned) {
            return null;
        }
        
        if (original === target) {
            return cloned;
        }

        return getTargetCopy(original.left, cloned.left, target) || getTargetCopy(original.right, cloned.right, target);
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


