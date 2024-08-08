import { BinaryTree, TreeNode } from "../commonLibs";

xdescribe('leetcode 297: serialize and deserialize a tree', () => {
    function serialize(root: TreeNode | null): string {
        const array = BinaryTree.convertTreeNodeToArrayBfs(root);
        const sArray = array.map(it => it === null ? 'null' : it.toString());
        return sArray.join();
    }

    function deserialize(data: string): TreeNode | null {
        const array: (number | null)[] = data.split(',').map(it => it === 'null' ? null : Number(it));
        return new BinaryTree(array).root;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
