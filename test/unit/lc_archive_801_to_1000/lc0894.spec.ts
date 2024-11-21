import {TreeNode} from '../commonLibs';

xdescribe('leetcode 894: all possible full binary trees', () => {
    function allPossibleFBT(n: number): Array<TreeNode | null> {
        const solutionsCache: Array<Array<TreeNode | null>> = new Array(n + 1).fill(0).map(() => []);
        return generateFBT(n, solutionsCache);
    };

    function generateFBT(nodeCount: number, solutionsCache: Array<Array<TreeNode | null>>): Array<TreeNode | null> {
        if (solutionsCache[nodeCount].length) {
            return solutionsCache[nodeCount];
        }
        if (nodeCount === 1) {
            solutionsCache[nodeCount].push(new TreeNode(0));
            return solutionsCache[nodeCount];
        }
        const answers: Array<TreeNode | null> = [];

        for (let i = 0; i < nodeCount - 1; ++i) {
            const leftNodeCount = i;
            const rightNodeCount = nodeCount - 1 - i;

            for (const leftSubtree of generateFBT(leftNodeCount, solutionsCache)) {
                for (const rightSubtree of generateFBT(rightNodeCount, solutionsCache)) {
                    answers.push(new TreeNode(0, leftSubtree, rightSubtree));
                }
            }
        }
        
        return (solutionsCache[nodeCount] = answers);
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
