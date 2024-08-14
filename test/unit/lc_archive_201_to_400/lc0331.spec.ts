import { TreeNode } from '../commonLibs';

xdescribe('leetcode 331: verify pre order serialization', () => {
    function isValidSerialization(preorder: string): boolean {
        const preorderArray = preorder.split(',');
        const index: number[] = [0];
        const result: boolean[] = [];
        constructTree(preorderArray, index);

        return index[0] === preorderArray.length - 1;
    }

    function constructTree(preorderArray: string[], index: number[]): TreeNode | null {
        if (index[0] >= preorderArray.length || preorderArray[index[0]] === '#') {
            return null;
        }

        const root = new TreeNode(Number(preorderArray[index[0]]));
        index[0]++;
        root.left = constructTree(preorderArray, index);
        index[0]++;
        root.right = constructTree(preorderArray, index);

        return root;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
