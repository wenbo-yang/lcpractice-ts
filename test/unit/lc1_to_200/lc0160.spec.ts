import { ListNode } from '../commonLibs';

xdescribe('leetcode 160: description', () => {
    function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
        if (!headA || !headB) {
            return null;
        }

        let a: ListNode | null = headA;
        let b: ListNode | null = headB;

        while (a != b) {
            a = a ? a.next : headB;
            b = b ? b.next : headA;
        }

        return a;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
