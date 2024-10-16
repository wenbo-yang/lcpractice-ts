import { Queue, TreeNode } from "./commonLibs";

xdescribe('leetcode 662: max width of binary tree', () => {
    function widthOfBinaryTree(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        const depth = getDepth(root);
        const maxPossibleWidth = Math.pow(2, depth - 1);
        const mat = new Array<Array<string>>(depth).fill([]).map(r => new Array<string>(maxPossibleWidth).fill(''));
        
        let l = 0; 
        let r = maxPossibleWidth - 1;

        const queue: {node: TreeNode, depth: number, l: number, r: number}[] = [{node: root, depth: 1, l:0, r: maxPossibleWidth - 1}];
        let index = 0; 
        let currDepth = 0;
        let currMin = 0;
        let currMax = 0;
        let maxWidth = 0;
        while(index < queue.length) {
            const curr = queue[index++];
            const currPosition = Math.floor((curr.l + curr.r)/ 2);

            if (curr.depth > currDepth) {
                currDepth = curr.depth;
                currMin = maxPossibleWidth;
                currMax = 0;
            }

            currMin = Math.min(currMin, currPosition);
            currMax = Math.max(currMax, currPosition);
            maxWidth = Math.max(maxWidth, currMax - currMin);

            if (curr.node.left) queue.push({node: curr.node.left, depth: curr.depth + 1, l: curr.l, r: currPosition - 1});
            if (curr.node.right) queue.push({node: curr.node.right, depth: curr.depth + 1, l: currPosition + 1, r: curr.r});
        }

        return maxWidth;
    };

    function getDepth(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


