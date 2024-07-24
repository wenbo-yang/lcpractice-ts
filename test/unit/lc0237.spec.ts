import { ListNode, SingleLinkedList } from "./commonLibs";

xdescribe('leetcode 237: delete node without access to head', () => {
    function deleteNode(node: ListNode | null): void {
        let prev = node;
        let curr = node;

        while(curr && curr.next) {
            curr.val = curr.next.val;
            prev = curr;
            curr = curr.next;
        }

        if (prev) {
            prev.next = null;
        }
    };

    it('test case 1 Input:, head = [4,5,1,9], target = 5 output [4,1,9] ', () => {
        const head = new SingleLinkedList([4,5,1,9]).head;
        const target = head?.next || null;        
        deleteNode(target);
        expect(SingleLinkedList.convertToArray(head)).toEqual([4,1,9]);
    });
});
