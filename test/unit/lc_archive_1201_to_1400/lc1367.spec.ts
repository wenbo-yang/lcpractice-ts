import {ListNode, TreeNode} from './commonLibs';

xdescribe('leetcode 1367: description', () => {
    function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
        return preorderTraversal(head, root);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
function preorderTraversal(head: ListNode | null, root: TreeNode | null): boolean {
    if (!head) {
        return true;
    }

    if (!root) {
        return false;
    }

    if (head.val === root.val) {
        return preorderTraversal(head.next, root.left) || preorderTraversal(head.next, root.right) || preorderTraversal(head, root.left) || preorderTraversal(head, root.right);
    }

    return preorderTraversal(head, root.left) || preorderTraversal(head, root.right)
}

