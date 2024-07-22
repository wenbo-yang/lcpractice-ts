import { ListNode, SingleLinkedList } from '../commonLibs';

xdescribe('leetcode 61: rotated list', () => {
    interface TargetNode {
        linkedListSize: number;
        newHead: ListNode | null;
        actualNodeIndexFromHead: number;
        tail: ListNode | null;
    }

    function rotateRight(head: ListNode | null, k: number): ListNode | null {
        if (head === null || head.next === null) {
            return head;
        }

        const tail = head;

        const targetNode = traverseAndMoveHead(tail, 0, k);

        if (targetNode.tail) {
            targetNode.tail.next = head;
        }

        head = targetNode.newHead;

        return head;
    }

    function traverseAndMoveHead(tail: ListNode | null, size: number, k: number): TargetNode {
        if (tail === null) {
            return {
                linkedListSize: size,
                newHead: null,
                tail: null,
                actualNodeIndexFromHead: size - (k % size),
            };
        }

        const targetNode = traverseAndMoveHead(tail.next, size + 1, k);

        if (targetNode.actualNodeIndexFromHead === size) {
            targetNode.newHead = tail;
        }

        if (tail.next === null) {
            targetNode.tail = tail;
        }

        if (tail.next === targetNode.newHead) {
            tail.next = null;
        }

        return targetNode;
    }

    function rotateRightStack(head: ListNode | null, k: number): ListNode | null {
        if (head === null || head.next === null) {
            return head;
        }

        const stack: ListNode[] = [];

        let temp: ListNode | null = head;

        while (temp !== null) {
            stack.push(temp);
            temp = temp.next;
        }

        const size = stack.length;

        let actualRotation = k % size;

        while (actualRotation-- > 0) {
            let last = stack.pop() || null;
            if (last) last.next = head;
            head = last;
            let next = stack[stack.length - 1];
            next.next = null;
        }

        return head;
    }

    it('test case 1 Input:, head = [0,1,2], k = 4 output [2, 0, 1] ', () => {
        const head = new SingleLinkedList([0, 1, 2]).head;

        const resultHead = rotateRight(head, 4);

        const resultArray = SingleLinkedList.convertToArray(resultHead);

        expect(resultArray).toEqual([2, 0, 1]);
    });

    it('test case 2 Input:, head = [0], k = 4 output [0] ', () => {
        const head = new SingleLinkedList([0]).head;

        const resultHead = rotateRight(head, 4);

        const resultArray = SingleLinkedList.convertToArray(resultHead);

        expect(resultArray).toEqual([0]);
    });
});
