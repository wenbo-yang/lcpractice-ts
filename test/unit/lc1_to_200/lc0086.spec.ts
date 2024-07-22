import { ListNode, SingleLinkedList } from '../commonLibs';

xdescribe('leetcode 86: partition list', () => {
    function partition(head: ListNode | null, x: number): ListNode | null {
        let l: ListNode | null = null;
        let r: ListNode | null = null;
        let lT: ListNode | null = l;
        let rT: ListNode | null = r;

        while (head !== null) {
            if (head.val < x) {
                if (l === null) {
                    l = new ListNode(head.val);
                    lT = l;
                } else {
                    if (lT) {
                        lT.next = new ListNode(head.val);
                        lT = lT.next;
                    }
                }
            } else {
                if (r === null) {
                    r = new ListNode(head.val);
                    rT = r;
                } else {
                    if (rT) {
                        rT.next = new ListNode(head.val);
                        rT = rT.next;
                    }
                }
            }

            head = head.next;
        }

        if (lT) {
            lT.next = r;
        }

        return l;
    }

    it('test case 1 Input head = [1,4,3,2,5,2], x = 3 : output [1,2,2,4,3,5]', () => {
        const head = new SingleLinkedList([1, 4, 3, 2, 5, 2]).head;
        const result = partition(head, 3);
        const resultArray = SingleLinkedList.convertToArray(result);
        expect(resultArray).toEqual([1, 2, 2, 4, 3, 5]);
    });
});
