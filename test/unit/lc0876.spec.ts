import { ListNode } from "./commonLibs";

xdescribe('leetcode 876: middle of the linked list', () => {
    function middleNode(head: ListNode | null): ListNode | null {
        let fast = head;
        let slow = head;

        while (fast !== null) {
            fast = fast?.next?.next || null;
            slow = slow?.next || null;
        }
        
        return slow;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
