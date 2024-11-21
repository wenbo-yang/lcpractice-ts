import { ListNode } from "../commonLibs";

xdescribe('leetcode 817: linked list componets', () => {
    function numComponents(head: ListNode | null, nums: number[]): number {
        const numSet = new Set<number>(nums);
        let componentCount = 0;
        let currentNode = head;
        let isInComponent = false;

        while (currentNode !== null) {
            if (numSet.has(currentNode.val)) {
                if (!isInComponent) {
                    isInComponent = true; // We're now inside a component.
                    componentCount++;    // Increment our component count.
                }
            } else {
                isInComponent = false;
            }
            currentNode = currentNode.next;
        }
        return componentCount;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
