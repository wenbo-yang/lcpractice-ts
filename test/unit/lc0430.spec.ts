xdescribe('leetcode 430: flatten doubly linked list with child', () => {
    class _Node {
        val: number
        prev: _Node | null
        next: _Node | null
        child: _Node | null

        constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
            this.val = (val===undefined ? 0 : val);
            this.prev = (prev===undefined ? null : prev);
            this.next = (next===undefined ? null : next);
            this.child = (child===undefined ? null : child);
        }
    }
    
    function flatten(head: _Node | null): _Node | null {
        const headTail = flattenHelper(head);

        return headTail.head;
    };

    function flattenHelper(head: _Node | null): {head: _Node | null, tail: _Node | null} {
        if (!head) {
            return {head: null, tail: null};
        }

        let tempHead: _Node | null = head;
        let prev = head.prev;
        let tail = prev;

        while (tempHead) {
            if (tempHead.child) {
                const headTail = flattenHelper(tempHead.child);

                const next = head.next || null;
                
                if (headTail.head) headTail.head.prev = tempHead;
                if (headTail.tail) headTail.tail.next = head.next;

                if (next) next.prev = headTail.tail;
                prev = headTail.tail;
                tempHead = next;
            }
            else {
                prev = tempHead;
                tempHead = tempHead.next
            }
        }


        return {head, tail};
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


