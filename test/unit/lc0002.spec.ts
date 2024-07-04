import { ListNode, SingleLinkedList } from "./commonStructures";

xdescribe('leetcode 2: add two numbers', () =>{
    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        if (!(l1 && l2)) {
            return (l1 || l2);
        }

        let carry = 0;

        let head: ListNode | null = null;
        let tail: ListNode | null = null;

        do {
            let l1Value = 0;
            let l2Value = 0;
            if (l1) {
                l1Value = l1.val;
                l1 = l1.next;
            }
            if (l2) {
                l2Value = l2.val;
                l2 = l2.next;
            }

            let val = carry + l1Value + l2Value;

            if (val >= 10) {
                val -= 10;
                carry = 1;
            }
            else {
                carry = 0;
            }

            if (tail === null) {
                head = new ListNode(val);
                tail = head;
            }
            else {
                tail.next = new ListNode(val);
                tail = tail.next;
            }
        }
        while(l1 || l2);

        if (carry) {
            tail.next = new ListNode(carry);
        }

        return head;
    }

    it('test case 1 l1 = [2,4,3], l2 = [5,6,4], [7,0,8]', () =>{
        const l1Array = [2,4,3]
        const l2Array = [5,6,4]
        const l1 = new SingleLinkedList(l1Array).head;
        const l2 = new SingleLinkedList(l2Array).head;

        const valueList = addTwoNumbers(l1, l2);

        const output = SingleLinkedList.convertToArray(valueList);

        console.log(output);

        expect(output).toEqual([7,0,8]);
    });

    it('test case 2 l1 = [0], l2 = [0], [0]', () =>{
        const l1Array = [0]
        const l2Array = [0]
        const l1 = new SingleLinkedList(l1Array).head;
        const l2 = new SingleLinkedList(l2Array).head;

        const valueList = addTwoNumbers(l1, l2);

        const output = SingleLinkedList.convertToArray(valueList);

        console.log(output);

        expect(output).toEqual([0]);
    });

    it('test case 3 l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9], [8,9,9,9,0,0,0,1]', () =>{
        const l1Array = [9,9,9,9,9,9,9]
        const l2Array = [9,9,9,9]
        const l1 = new SingleLinkedList(l1Array).head;
        const l2 = new SingleLinkedList(l2Array).head;

        const valueList = addTwoNumbers(l1, l2);

        const output = SingleLinkedList.convertToArray(valueList);

        console.log(output);
        expect(output).toEqual([8,9,9,9,0,0,0,1]);
    });
});