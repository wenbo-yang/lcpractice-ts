import { ListNode, TreeNode } from '../commonLibs';

xdescribe('leetcode 109: convert sorted list to bst', () => {
    function sortedListToBST(head: ListNode | null): TreeNode | null {
        return build(head, head);
    }
    function build(head: ListNode | null, tail: ListNode | null) {
        if (!head || head == tail) {
            return null;
        }

        let fast: ListNode | null = head;
        let slow: ListNode | null = head;

        while (fast != tail && fast?.next != tail) {
            slow = slow?.next || null;
            fast = fast?.next?.next || null;
        }

        let root = new TreeNode(slow?.val);

        root.left = build(head, slow);
        root.right = build(slow?.next || null, tail);
        return root;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
