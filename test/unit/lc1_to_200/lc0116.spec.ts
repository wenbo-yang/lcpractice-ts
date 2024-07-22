xdescribe('leetcode 116: next pointer in binary tree', () => {
    //       1 -> null
    //   2 ->   3 -> null
    // 4->5 -> 6->7 -> null
    // level order traversal and then point right level;

    // or pre order traversal
    // connect(root: Node|null): Node | null {
    //     if (!root || !root->left) return root;

    //     root->left->next = root->right;

    //     if (root->next)
    //       root->right->next = root->next->left; // establish link in each level

    //     connect(root->left);
    //     connect(root->right);
    //     return root;
    // }
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
