import { ListNode } from '../commonLibs';

xdescribe('leetcode 92: reverse linked list', () => {
    function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
        // one pass left = 2 and right = 5
        // idea: cache the position information in stack
        // so that 2 can be swapped with 5
        // and
        // and 3 can be swapped with 4

        // let l : ListNode | null = head;
        // let prevL: ListNode | null = null;
        // let r: ListNode | null = head;
        // let count = 0
        // 0, 1, 2, 3 ,4, 5, 6
        left--;
        right--;
        const nodeList: (ListNode | null)[] = [];
        let currentNodePointer = Math.floor((right + left) / 2); // left = 1, right = 5 index 3 // work on odd or even case
        let index = 0;
        let node = head;
        while (index <= right && node !== null) {
            if (currentNodePointer < left) {
                break;
            }

            if (currentNodePointer <= index) {
                swap(nodeList, currentNodePointer);
                currentNodePointer--;
            }

            nodeList.push(node);
            node = node.next;
            index++;
        }

        return head;
    }

    function swap(nodeList: (ListNode | null)[], indexToBeSwapped: number) {
        let prevL = indexToBeSwapped > 0 ? nodeList[indexToBeSwapped - 1] : null;
        let prevR = nodeList.length > 1 ? nodeList[nodeList.length - 2] : null;

        let toBeSwapped = nodeList[indexToBeSwapped] || null;
        let tail = nodeList[nodeList.length - 1] || null;
        if (prevL) {
        }

        if (toBeSwapped && tail) {
            let temp = toBeSwapped;
            toBeSwapped.next = tail.next || null;
            tail.next = temp.next || null;
        }

        if (prevL) {
            prevL.next = tail;
        }

        if (prevR) {
            prevR.next = toBeSwapped;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
