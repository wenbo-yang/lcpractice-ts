import { ListNode, SingleLinkedList } from './commonLibs';

xdescribe('leetcode 82: remove duplicates', () => {
    function deleteDuplicates(head: ListNode | null): ListNode | null {
        if (!head || head.next === null) {
            return head;
        }

        head = trimHead(head);

        let l: ListNode | null = head;
        let r: ListNode | null = head?.next || null;

        while (r !== null) {
            if (r.val === r.next?.val) {
                while (l?.next !== r) {
                    l = l?.next || null;
                }

                while (r !== null && r.val === r?.next?.val) {
                    r = r.next;
                }

                l.next = r.next;
            }

            r = r.next;
        }

        return head;
    }

    function trimHead(head: ListNode | null): ListNode | null {
        while (head?.val === head?.next?.val) {
            let r = head?.next || null;
            while (r?.val === head?.val) {
                r = r?.next || null;
            }
            head = r;
        }

        return head;
    }

    it('test case 1 Input: head = [1,2,3,3,4,4,5], Output: [1,2,5] ', () => {
        const head = new SingleLinkedList([1, 2, 3, 3, 4, 4, 5]).head;

        const result = deleteDuplicates(head);

        const resultArray = SingleLinkedList.convertToArray(result);

        expect(resultArray).toEqual([1, 2, 5]);
    });

    //     it('test case 2 Input: head = [1,1,1,2,3], Output: [2,3] ', () => {
    //         const head = new SingleLinkedList([1,1,1,2,3]).head;

    //         const result = deleteDuplicates(head);

    //         const resultArray = SingleLinkedList.convertToArray(result);

    //         expect(resultArray).toEqual([2, 3]);
    //     });

    //     it('test case 2 Input: head = [1,1,1,2,2,2,3], Output: [2,3] ', () => {
    //         const head = new SingleLinkedList([1,1,1,2,2,2, 3]).head;

    //         const result = deleteDuplicates(head);

    //         const resultArray = SingleLinkedList.convertToArray(result);

    //         expect(resultArray).toEqual([3]);
    //     });
});
