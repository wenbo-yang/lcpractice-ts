import { ListNode, SingleLinkedList } from '../commonLibs';

xdescribe('leetcode 203: remove linked list elements', () => {
    function removeElements(head: ListNode | null, val: number): ListNode | null {
        if (val === head?.val) {
            head = head?.next || null;
            return head;
        }

        let node = head?.next || null;
        let prev = head;

        while (node) {
            if (node?.val === val) {
                if (prev) prev.next = node.next;
            }

            prev = node;
            node = node.next;
        }

        return head;
    }

    it('test case 1 Input: [1,2,6,3,4,5,6], target = 6, output 2 ', () => {
        const head = new SingleLinkedList([1, 2, 6, 3, 4, 5, 6]).head;
        expect(SingleLinkedList.convertToArray(removeElements(head, 6))).toEqual([1, 2, 3, 4, 5]);
    });
});
