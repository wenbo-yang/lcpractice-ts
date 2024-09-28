import {TreeNode} from './commonLibs';

xdescribe('leetcode 687: longest univalue path', () => {
    function longestUnivaluePath(root: TreeNode | null): number {
        const result: number[] = [0];

        longestUnivaluePathHelper(root, 0, Number.MIN_SAFE_INTEGER, result);

        return result[0];
    };

    function longestUnivaluePathHelper(root: TreeNode | null, currentLength: number, parentValue: number, result: number[]) {
        if (!root) {
            return;
        }
        
        if (root.val === parentValue) {
            currentLength++;
        }
        else {
            currentLength = 1;    
        }

        result[0] = Math.max(result[0], currentLength);

        longestUnivaluePathHelper(root.left, currentLength, root.val, result);
        longestUnivaluePathHelper(root.right, currentLength, root.val, result);
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

