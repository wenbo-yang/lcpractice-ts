import {ListNode} from '../commonLibs'

xdescribe('leetcode 328: odd even linked list', () => {
    function oddEvenListSwappingValue(head: ListNode | null): ListNode | null {
        let temp: ListNode | null = head;
        while(temp && temp.val % 2 === 1) {
            temp = temp.next;
        }

        let e: ListNode | null = temp;
        let o: ListNode | null = temp;

        while(o !== null) {
            if (o.val % 2 === 1) {
                if (e) {
                    const temp = e.val;
                    e.val = o.val;
                    o.val = temp;
                    e = e.next;
                    // while(e && e.val % 2 !== 0) {
                    //     e = e.next;
                    // }
                }
            }

            o = o.next;
        }

        return head;
    }

    function oddEvenListSwappingNodes(head: ListNode | null): ListNode | null {
        let temp: ListNode | null = head;
        let tempPrev: ListNode | null = null;
        while(temp && temp.val % 2 === 1) {
            tempPrev = temp
            temp = temp.next;
        }

        let e: ListNode | null = temp;
        let o: ListNode | null = temp;
        let ePrev: ListNode | null = tempPrev;
        let oPrev: ListNode | null = temp;


        while(o !== null) {
            if (o.val % 2 === 1) {
                if (e) {
                    if (oPrev) {
                        oPrev.next = o.next;
                    }

                    temp = o.next;
                    if (ePrev) {
                        ePrev.next = o;
                    }
                    o.next = e;
                }
            }
            o = temp
        }

        return head;
    }

    function swap(e: ListNode | null, o: ListNode, ePrev: ListNode | null, oPrev: ListNode | null) {
        if (e) {
            if (ePrev) {
                ePrev.next = o;
            }

            if (oPrev) {
                oPrev.next = o.next;
            }

            o.next = e
        }
    }

    
    // function oddEvenList(head: ListNode | null): ListNode | null {
    //     // 1 2 3 4 5
    //     // o e l
    //     // o.next = e.next
    //     // l.next = e
    //     // swap(e, l)

    //     if (!head) {
    //         return null;
    //     }
    //     let oLast: ListNode | null = null;
    //     let e : ListNode | null = null;
    //     if (head.val % 2 === 1) {
    //         oLast = head;
    //         while(oLast && oLast.next && oLast.val % 2 === 1) {
    //             oLast = oLast.next;
    //         }

    //         e = oLast.next 
    //     }
    //     else {
    //         e = head
    //     }

    //     while (e != null) {
    //         if (e.next && e.next.val % 2 === 1) {
    //             // swap e with e.next;
    //             swap(e, e.next, oLast, head)
    //         }

    //         e = e.next;
    //     }
    // };

    // function swap(e: ListNode, next: ListNode, oLast: ListNode | null, head: ListNode) {
    //     if (oLast === null) {
    //        // head is even
    //        // swap head with next
    //        temp = head, 
    //     }
    // }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




