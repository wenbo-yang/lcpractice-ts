import { ListNode, MinHeap, SingleLinkedList } from '../commonLibs';

xdescribe('leetcode 23: Merge k Sorted Lists', () => {
    interface ValueNodePair {
        value: number;
        node: ListNode | null;
    }

    function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
        const comparator = (first: ValueNodePair, second: ValueNodePair): number => {
            if (first.value > second.value) return 1;
            if (first.value < second.value) return -1;

            return 0;
        };

        const minHeap = new MinHeap<ValueNodePair>(comparator);

        pushToHeap(minHeap, lists);

        let head: ListNode | null = null;
        let temp: ListNode | null = null;

        do {
            const valueNodePair = minHeap.pop();
            if (head === null) {
                head = new ListNode(valueNodePair.value);
                temp = head;
            } else {
                if (temp === null) {
                    throw new Error('not possible');
                }
                temp.next = new ListNode(valueNodePair.value);
                temp = temp.next;
            }

            if (valueNodePair.node && valueNodePair.node.next !== null) {
                minHeap.push({ value: valueNodePair.node.next.val, node: valueNodePair.node.next });
            }
        } while (minHeap.length !== 0);

        return head;
    }

    function pushToHeap(minHeap: MinHeap<ValueNodePair>, lists: (ListNode | null)[]) {
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] !== null) {
                minHeap.push({ value: lists[i]?.val || Number.MAX_SAFE_INTEGER, node: lists[i] });
            }
        }
    }

    it('test case 1 Input: lists = [[1,4,5],[1,3,4],[2,6]]: output: [1,1,2,3,4,4,5,6] ', () => {
        const nums1 = [1, 4, 5];
        const nums2 = [1, 3, 4];
        const nums3 = [2, 6];

        const lists: Array<ListNode | null> = [new SingleLinkedList(nums1).head, new SingleLinkedList(nums2).head, new SingleLinkedList(nums3).head];

        const result = mergeKLists(lists);

        const resultArray = SingleLinkedList.convertToArray(result);
        expect(resultArray).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });
});
