import { ListNode, SingleLinkedList } from '../commonLibs';

xdescribe('leetcode 19: remove nth node from the end', () => {
    function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        const size = removeNthFromEndHelper(head, n);

        if (size === n) {
            head = head?.next || null;
        }

        return head;
    }

    function removeNthFromEndHelper(node: ListNode | null, target: number): number {
        if (node === null) {
            return 0;
        }

        const current = removeNthFromEndHelper(node.next, target) + 1;

        if (current - 1 === target) {
            node.next = node.next?.next || null;
        }

        return current;
    }

    function removeNthFromEndStack(head: ListNode | null, n: number): ListNode | null {
        const stack: ListNode[] = [];
        let temp = head;
        while (temp) {
            stack.push(temp);
            temp = temp.next;
        }

        const index = stack.length - n;

        if (index < 0) {
            return head;
        }

        if (index === 0) {
            head = head?.next || null;
        } else {
            stack[index - 1].next = stack[index].next;
        }

        return head;
    }

    it('test case 1 Input: Input: Input: head = [1,2,3,4,5], n = 2, Output: [1,2,3,5]', () => {
        const list = [1, 2, 3, 4, 5];
        const n = 2;
        const output = [1, 2, 3, 5];

        const head = new SingleLinkedList(list).head;

        const result = removeNthFromEnd(head, n);

        const outputArray = SingleLinkedList.convertToArray(result);
        expect(outputArray).toEqual(output);
    });

    it('test case 2 Input: Input: Input: head = [1], n = 1, Output: []', () => {
        const list = [1];
        const n = 1;
        const output: number[] = [];

        const head = new SingleLinkedList(list).head;
        const result = removeNthFromEnd(head, n);

        const outputArray = SingleLinkedList.convertToArray(result);
        expect(outputArray).toEqual(output);
    });

    it('test case 3 Input: Input: Input: head = [1,2] n =1, Output: [1]', () => {
        const list = [1, 2];
        const n = 1;
        const output = [1];

        const head = new SingleLinkedList(list).head;

        const result = removeNthFromEnd(head, n);

        const outputArray = SingleLinkedList.convertToArray(result);
        expect(outputArray).toEqual(output);
    });

    it('test case 4 Input: Input: Input: head = [1,2,3,4,5], n = 2, Output: [1,2,3,5]', () => {
        const list = [1, 2, 3, 4, 5];
        const n = 2;
        const output = [1, 2, 3, 5];

        const head = new SingleLinkedList(list).head;

        const result = removeNthFromEndStack(head, n);

        const outputArray = SingleLinkedList.convertToArray(result);
        expect(outputArray).toEqual(output);
    });

    it('test case 5 Input: Input: Input: head = [1], n = 1, Output: []', () => {
        const list = [1];
        const n = 1;
        const output: number[] = [];

        const head = new SingleLinkedList(list).head;
        const result = removeNthFromEndStack(head, n);

        const outputArray = SingleLinkedList.convertToArray(result);
        expect(outputArray).toEqual(output);
    });

    it('test case 6 Input: Input: Input: head = [1,2] n =1, Output: [1]', () => {
        const list = [1, 2];
        const n = 1;
        const output = [1];

        const head = new SingleLinkedList(list).head;

        const result = removeNthFromEndStack(head, n);

        const outputArray = SingleLinkedList.convertToArray(result);
        expect(outputArray).toEqual(output);
    });
});
