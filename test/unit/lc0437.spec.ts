import {TreeNode} from './commonLibs';

xdescribe('leetcode 437: path sum', () => {
    function pathSum(root: TreeNode | null, targetSum: number): number {
        const pathSumArray: number[] = [];
        const count: number[] = [0];

        pathSumHelper(root, targetSum, pathSumArray, count)
        return count[0];
    };

    function pathSumHelper(root: TreeNode | null, targetSum: number, pathSumArray: number[], count: number[]) {
        if (!root) {
            return;
        }

        pathSumArray.push(0); 
        incPathSumArray(pathSumArray, targetSum, count, root.val);

        pathSumHelper(root.left, targetSum, pathSumArray, count);
        pathSumHelper(root.right, targetSum, pathSumArray, count);

        decPathSumArray(pathSumArray, targetSum, count, root.val);
        pathSumArray.pop();
    }

    function incPathSumArray(pathSumArray: number[], targetSum: number, count: number[], val: number) {
        for (let i = 0; i < pathSumArray.length; i++) {
            pathSumArray[i] = pathSumArray[i] + val;
    
            if (pathSumArray[i] === targetSum) {
                count[0]++;
            }
        }
    }

    function decPathSumArray(pathSumArray: number[], targetSum: number, count: number[], val: number) {
        for (let i = 0; i < pathSumArray.length; i++) {
            pathSumArray[i] = pathSumArray[i] - val;
        }
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



