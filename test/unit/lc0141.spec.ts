import { ListNode } from './commonLibs';
xdescribe('leetcode 141: linked list circle', () => {
    function hasCycle(head: ListNode | null): boolean {
        let slow = head;
        let fast = head;
        while (fast) {
            if (!fast.next) {
                return false;
            }

            fast = fast.next.next;
            slow = slow?.next || null;
            if (fast === slow) {
                return true;
            }
        }
        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
