import { DoubleLinkedList, DoubleLinkedListNode, TreeNode } from '../commonLibs';

xdescribe('leetcode 426: description', () => {
    function convertBSTToDoublyLinkedList(root: TreeNode | null): DoubleLinkedListNode | null {
        const array: number[] = [];

        inorderTraversal(root, array);

        const list = new DoubleLinkedList(array);

        const head = list.head;
        const tail = list.tail;

        if (tail) tail.next = head;
        if (head) head.prev = tail;

        return head;
    }

    function inorderTraversal(root: TreeNode | null, array: number[]) {
        if (!root) {
            return;
        }

        inorderTraversal(root.left, array);
        array.push(root.val);
        inorderTraversal(root.right, array);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
