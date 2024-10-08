xdescribe('leetcode 510: inorder successor in BST', () => {
    class Node {
        val: number;
        left: Node | null;
        right: Node | null;
        parent: Node | null;
        constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
            this.val = val === undefined ? 0 : val;
            this.left = left === undefined ? null : left;
            this.right = right === undefined ? null : right;
            this.parent = parent === undefined ? null : parent;
        }
    }

    function inorderSuccessor(node: Node | null): Node | null {
        if (!node) {
            return null;
        }

        if (node.right) {
            node = node.right;
            while (node.left) {
                node = node.left;
            }
            return node;
        }
        while (node.parent && node === node.parent.right) {
            node = node.parent;
        }
        return node.parent;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
