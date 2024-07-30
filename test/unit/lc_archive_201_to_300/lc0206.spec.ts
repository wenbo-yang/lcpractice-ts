import { ListNode, SingleLinkedList } from '../commonLibs';

xdescribe('leetcode 206: reverse linked list', () => {
    function reverseList(head: ListNode | null): ListNode | null {
        if (!head) {
            return null;
        }

        const stack: (ListNode | null)[] = [];

        while (head != null) {
            stack.push(head);
            head = head.next;
        }

        for (let i = stack.length - 1; i >= 0; i--) {
            const curr = stack[i];
            if (curr) {
                curr.next = stack[i - 1] || null;
            }
        }

        return stack[stack.length - 1];
    }

    it('test case 1 Input: [1,2,3,4,5], output [5, 4,3 ,2, 1,] ', () => {
        const head = new SingleLinkedList([1, 2, 3, 4, 5]).head;

        expect(SingleLinkedList.convertToArray(reverseList(head))).toEqual([5, 4, 3, 2, 1]);
    });
});
