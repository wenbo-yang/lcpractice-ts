import { BinaryTree, TreeNode } from '../commonLibs';

xdescribe('leetcode 129: Sum Root to Leaf Numbers', () => {
    function sumNumbers(root: TreeNode | null): number {
        const pathNums: number[] = [];
        const currentRootToNodeDigits: number[] = [];

        treePreorderTraversal(root, pathNums, currentRootToNodeDigits);

        return sum(pathNums);
    }

    function treePreorderTraversal(root: TreeNode | null, pathNums: number[], currentRootToNodeDigits: number[]) {
        if (!root) {
            return;
        }

        if (isLeafNode(root)) {
            pathNums.push(Number([...currentRootToNodeDigits, root.val].join('')));
        }

        currentRootToNodeDigits.push(root.val);
        treePreorderTraversal(root.left, pathNums, currentRootToNodeDigits);
        treePreorderTraversal(root.right, pathNums, currentRootToNodeDigits);
        currentRootToNodeDigits.pop();
    }

    function sum(pathNums: number[]): number {
        let sum = 0;
        for (const num of pathNums) {
            sum += num;
        }

        return sum;
    }

    function isLeafNode(root: TreeNode): boolean {
        return !(root.left || root.right);
    }

    it('test case 1 Input: [4,9,0,5,1],  output 1026', () => {
        const root = new BinaryTree([4, 9, 0, 5, 1]).root;

        const result = sumNumbers(root);

        expect(result).toEqual(1026);
    });
});
