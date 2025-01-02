import { ListNode } from './commonLibs';

xdescribe('leetcode 1290: convert binary number in a linked list to integer', () => {
    function getDecimalValue(head: ListNode | null): number {
        let temp = head;
        let number = 0;
        while (temp) {
            number = number * 2 + temp.val;
            temp = temp.next;
        }

        return number;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});