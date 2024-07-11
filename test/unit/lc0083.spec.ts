import { ListNode, SingleLinkedList } from './commonLibs';

xdescribe('leetcode 83: Remove Duplicates from Sorted List', () => {
    function deleteDuplicates(head: ListNode | null): ListNode | null {
        if (!head || !head.next) {
            return head;
        }

        let l: ListNode | null = head;
        let r: ListNode | null = head?.next || null;

        while (r !== null) {
            if (l.val === r.val) {
                l.next = r.next;
            } else {
                l = r;
            }
            r = r.next || null;
        }

        return head;
    }

    it('test case 1 head = [1,1,2], output [1, 2] ', () => {
        const head = new SingleLinkedList([1, 1, 2]).head;

        const result = deleteDuplicates(head);
        const resultArray = SingleLinkedList.convertToArray(result);

        expect(resultArray).toEqual([1, 2]);
    });
});
