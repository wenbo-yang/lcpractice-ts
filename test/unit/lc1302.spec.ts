import {TreeNode} from './commonLibs';

xdescribe('leetcode 1302: deepest leaves sum', () => {
    function deepestLeavesSum(root: TreeNode | null): number {
        const result: [number, number] = [0, 0];
    
        dfs(root, 0, result);

        return result[1];
    };


    function dfs(root: TreeNode | null, depth: number, result: [number, number]) {
        if (!root) {
            return;
        }

        if (depth === result[0] ) {
            result[1] += root.val;
        }

        if (depth > result[0]) {
            result[0] = depth;
            result[1] = root.val;
        }

        dfs(root.left, depth + 1, result);
        dfs(root.right, depth + 1, result);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



