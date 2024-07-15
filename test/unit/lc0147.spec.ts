import { ListNode } from './commonLibs';

xdescribe('leetcode 147: insertion sort list', () => {
    function insertionSortList(head: ListNode | null): ListNode | null {
        const fakeHead = new ListNode(Number.MIN_SAFE_INTEGER);

        while (head) {
            let iter = fakeHead;
            while (iter.next && head.val > iter.next.val) {
                iter = iter.next;
            }

            let next = head.next;
            head.next = iter.next;
            iter.next = head;
            head = next;
        }
        return fakeHead.next;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
