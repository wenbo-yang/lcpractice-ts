import { ListNode } from './commonLibs';

xdescribe('leetcode 445: description', () => {
    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        if (l1 === null || l2 === null) {
            return l1 || l2;
        }

        return addTwoNumbersHelper(l1, l2);
    }

    function addTwoNumbersHelper(l1: ListNode, l2: ListNode): ListNode | null {
        let l1Stack: (ListNode | null)[] = [];
        let l2Stack: (ListNode | null)[] = [];

        let temp1: ListNode | null = l1;
        while (temp1) {
            l1Stack.push(temp1);
            temp1 = temp1.next;
        }

        let temp2: ListNode | null = l2;
        while (temp2) {
            l2Stack.push(temp2);
            temp2 = temp2.next;
        }

        let usel1Stack = l1Stack.length > l2Stack.length;

        while (l1Stack.length !== 0 && l2Stack.length !== 0) {
            const l1Node = l1Stack.pop();
            const l2Node = l1Stack.pop();
            if (l1Node && l2Node) {
                if (usel1Stack) {
                    l1Node.val += l2Node.val;
                } else {
                    l2Node.val += l1Node.val;
                }
            }
        }

        return usel1Stack ? l1 : l2;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
