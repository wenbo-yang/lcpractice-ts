import { TreeNode } from '../commonLibs';

xdescribe('leetcode 105: construct binary tree from pre and inorder traversal', () => {
    function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        const inOrderMap = buildInOrderTreePositionMap(inorder);

        return buildTreeHelper(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1, inOrderMap);
    }

    function buildInOrderTreePositionMap(inorder: number[]) {
        const inOrderMap = new Map<number, number>();

        for (let i = 0; i < inorder.length; i++) {
            inOrderMap.set(inorder[i], i);
        }

        return inOrderMap;
    }

    function buildTreeHelper(preorder: number[], inorder: number[], preStartingIndex: number, preEndingIndex: number, inStartingIndex: number, inEndingIndex: number, inOrderMap: Map<number, number>): TreeNode | null {
        if (preStartingIndex > preEndingIndex) return null;

        let im = inOrderMap.get(preorder[preStartingIndex]) || -1;
        let pm = preStartingIndex + (im - inStartingIndex);

        let root = new TreeNode(preorder[preStartingIndex]);

        root.left = buildTreeHelper(preorder, inorder, preStartingIndex + 1, pm, inStartingIndex, im - 1, inOrderMap);
        root.right = buildTreeHelper(preorder, inorder, pm + 1, preEndingIndex, im + 1, inEndingIndex, inOrderMap);
        return root;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
