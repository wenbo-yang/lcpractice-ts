import { ListNode, SingleLinkedList } from "./commonLibs";

xdescribe('leetcode 1171: remove zero sum consecutive nodes from linked list', () => {
    function removeZeroSumSublists(head: ListNode | null): ListNode | null {
        const prefixSum: number[] = [];
        let temp = head;

        const prevSums = new Set<number>()
        while (temp) {
            let currentSum = temp.val + (prefixSum[prefixSum.length - 1] || 0);
            if (prevSums.has(currentSum)) {
                while(prefixSum[prefixSum.length - 1] !== currentSum) {
                    prefixSum.pop();
                }
            }
            else {
                prevSums.add(currentSum);
                prefixSum.push(currentSum);
            }
            
            temp = temp.next;
        }
        

        const reconstructedArr = new Array<number>(prefixSum.length).fill(0);

        for (let i = 0; i < prefixSum.length; i++) {
            reconstructedArr[i] = prefixSum[i] - (prefixSum[i - 1] || 0);
        }

        return new SingleLinkedList(reconstructedArr).head;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
