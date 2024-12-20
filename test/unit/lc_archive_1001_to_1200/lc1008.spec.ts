import {TreeNode} from './commonLibs';

xdescribe('leetcode 1008: construct bst from preorder traversal', () => {
    function bstFromPreorder(preorder: number[]): TreeNode | null {
        const length = preorder.length;
        const nextGreaterIndex = new Array(length);
        const stack: number[] = [];
    
        for (let i = length - 1; i >= 0; i--) {
            while (stack.length > 0 && preorder[stack[stack.length - 1]] < preorder[i]) {
                stack.pop();
            }
            nextGreaterIndex[i] = stack.length > 0 ? stack[stack.length - 1] : length;
            stack.push(i);
        }
    
        return buildTree(0, length, nextGreaterIndex, preorder);
    };

    function buildTree(leftIndex: number, rightIndex: number, nextGreaterIndex: number[], preorder: number[]): TreeNode | null {
        if (leftIndex >= rightIndex) {
            return null;
        }
        return new TreeNode(
            preorder[leftIndex],
            buildTree(leftIndex + 1, nextGreaterIndex[leftIndex], nextGreaterIndex, preorder),
            buildTree(nextGreaterIndex[leftIndex], rightIndex, nextGreaterIndex, preorder)
        );
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
