xdescribe('leetcode 708: insert into a sorted circular list', () => {
    class LinkedListNode {
        val: number;
        next: LinkedListNode | null = null;

        constructor(val: number) {
            this.val = val;
        }
    }

    function insert(head: LinkedListNode, insertVal: number): LinkedListNode {
        const node = new LinkedListNode(insertVal);
        if (head === null) {
            node.next = node;
            return node;
        }

        let prev = head;
        let curr = head.next;

        while (curr && curr != head) {
            if ((prev.val <= insertVal && insertVal <= curr.val)
                || (prev.val > curr.val && (insertVal >= prev.val || insertVal <= curr.val))) {
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        prev.next = node;
        node.next = curr;
        
        return head;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
