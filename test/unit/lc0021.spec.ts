import { ListNode, SingleLinkedList } from './commonLibs';

xdescribe('leetcode 21: merge two sorted lists', () => {
    function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        if (!list1) {
            return list2;
        }

        if (!list2) {
            return list1;
        }

        let current: ListNode;
        if (list1.val < list2.val) {
            current = new ListNode(list1.val);
            current.next = mergeTwoLists(list1.next, list2);
        } else {
            current = new ListNode(list2.val);
            current.next = mergeTwoLists(list1, list2.next);
        }

        return current;
    }

    it('test case 1 Input: list1 = [1,2,4], list2 = [1,3,4], Output: [1,1,2,3,4,4]', () => {
        const nums1 = [1, 2, 4];
        const nums2 = [1, 3, 4];

        const list1 = new SingleLinkedList(nums1).head;
        const list2 = new SingleLinkedList(nums2).head;

        const result = mergeTwoLists(list1, list2);
        const resultArray = SingleLinkedList.convertToArray(result);
        expect(resultArray).toEqual([1, 1, 2, 3, 4, 4]);
    });

    it('test case 2 Input: list1 = [], list2 = [], Output: []', () => {
        const nums1: number[] = [];
        const nums2: number[] = [];

        const list1 = new SingleLinkedList(nums1).head;
        const list2 = new SingleLinkedList(nums2).head;

        const result = mergeTwoLists(list1, list2);

        const resultArray = SingleLinkedList.convertToArray(result);
        expect(resultArray).toEqual([]);
    });

    it('test case 3 Input: list1 = [], list2 = [0], Output: [0]', () => {
        const nums1: number[] = [];
        const nums2 = [0];

        const list1 = new SingleLinkedList(nums1).head;
        const list2 = new SingleLinkedList(nums2).head;

        const result = mergeTwoLists(list1, list2);

        const resultArray = SingleLinkedList.convertToArray(result);
        expect(resultArray).toEqual([0]);
    });
});
