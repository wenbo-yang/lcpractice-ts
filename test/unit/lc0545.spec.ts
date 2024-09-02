import {Queue, TreeNode} from './commonLibs'

xdescribe('leetcode 545: description', () => {
    function boundaryOfBinaryTree(root: TreeNode | null): number[] {
        if (!root) {
            return [];
        }

        const levelOrderTraversal: {depth: number, index: number, node: TreeNode}[][] = [[{depth: 0, index: 0, node:root}]];
        let currentDepth = 0;
        while (levelOrderTraversal[currentDepth]) {
            const nextLevel: {depth: number, index: number, node: TreeNode}[] = [];

            for (const curr of levelOrderTraversal[currentDepth]) {
                if (curr.node.left) nextLevel.push({depth: curr.depth + 1, index: curr.index - 1, node: curr.node.left});
                if (curr.node.right) nextLevel.push({depth: curr.depth + 1, index: curr.index + 1, node: curr.node.right});
            }
            
            if (nextLevel.length) {
                levelOrderTraversal.push(nextLevel);
            }

            currentDepth++;
        }


        const result: number[] = [];

        fillDownwards(levelOrderTraversal, result);
        fillLastLevel(levelOrderTraversal, result);
        fillUpwards(levelOrderTraversal, result);
    }

    function fillDownwards(levelOrderTraversal: { depth: number; index: number; node: TreeNode; }[][], result: number[]) {
        let lastIndex = 0;

        for(const level of levelOrderTraversal) {
            if(level[0].index <= lastIndex) {
                result.push(level[0].node.val);
                lastIndex = level[0].index;
            }
        }
    }
    
    function fillLastLevel(levelOrderTraversal: { depth: number; index: number; node: TreeNode; }[][], result: number[]) {
        for(let i = 1; i < levelOrderTraversal[levelOrderTraversal.length - 1].length; i++) {
            result.push(levelOrderTraversal[levelOrderTraversal.length - 1][i].node.val);
        }
    }

    function fillUpwards(levelOrderTraversal: { depth: number; index: number; node: TreeNode; }[][], result: number[]) {
        for (let i = levelOrderTraversal.length - 2; i >= 1; i--) {
            if (!(levelOrderTraversal[i].length === 1 && levelOrderTraversal[i][levelOrderTraversal[i].length - 1].index <= 0)) {
                result.push(levelOrderTraversal[i][levelOrderTraversal[i].length - 1].node.val);
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






