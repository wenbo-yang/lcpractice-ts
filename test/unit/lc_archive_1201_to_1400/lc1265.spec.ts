
xdescribe('leetcode 1265: print immutable linked list in reverse', () => {
    class ImmutableListNode {
        printValue() {}
        getNext(): ImmutableListNode {}
    }
   
    function printLinkedListInReverse(head: ImmutableListNode) {
        if (head) {
            printLinkedListInReverse(head.next);
            head.printValue();
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
