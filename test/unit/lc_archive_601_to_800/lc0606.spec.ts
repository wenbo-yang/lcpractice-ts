import {TreeNode} from './commonLibs';

xdescribe('leetcode 606: binary tree to string', () => {
    function tree2str(root: TreeNode | null): string {
        if (!root) {
            return '';
        }

        const left = tree2str(root.left);
        const right = tree2str(root.right);
        
        return root.val.toString() + left ? `(${left})` : '' + right ? `(${right})` : '';
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
