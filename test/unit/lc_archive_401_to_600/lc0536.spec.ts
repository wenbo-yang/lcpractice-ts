import { TreeNode } from '../commonLibs';

xdescribe('leetcode 536: description', () => {
    function constructBinaryTreeFromString(input: string): TreeNode | null {
        if (!input) {
            return null;
        }

        return constructBinaryTreeHelper(input);
    }

    function constructBinaryTreeHelper(input: string): TreeNode | null {
        let number = '';
        let root: TreeNode | null = null;
        let index = 0;

        while (isANumber(input[index])) {
            number += input[index++];
        }

        root = new TreeNode(Number(number));

        let leftString = '';
        const stack: string[] = [];
        let startingIndex = index;
        if (index < input.length) {
            stack.push(input[index]);
            while (stack.length !== 0) {
                if (input[index] === '(') {
                    stack.push('(');
                }
                if (input[index] === ')') {
                    stack.pop();
                }

                index++;
            }

            root.left = constructBinaryTreeFromString(input.substring(startingIndex + 1, index));
        }

        startingIndex = index;
        if (index < input.length) {
            stack.push(input[index]);
            while (stack.length !== 0) {
                if (input[index] === '(') {
                    stack.push('(');
                }
                if (input[index] === ')') {
                    stack.pop();
                }

                index++;
            }

            root.right = constructBinaryTreeFromString(input.substring(startingIndex + 1, index));
        }

        return root;
    }

    function isANumber(s: string): boolean {
        return !Number.isNaN(Number(s));
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
