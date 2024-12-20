import { ListNode } from "./commonLibs";

xdescribe('leetcode 1019: next greater node in linked list', () => {
    function nextLargerNodes(head: ListNode | null): number[] {
        const valuesArray: number[] = [];
  
        while (head !== null) {
            valuesArray.push(head.val);
            head = head.next;
        }
        const stack: number[] = [];
        const length = valuesArray.length;
        const nextLargerValues: number[] = new Array(length).fill(0);
    
        for (let i = length - 1; i >= 0; i--) {
            while (stack.length > 0 && stack[stack.length - 1] <= valuesArray[i]) {
                stack.pop();
            }
            nextLargerValues[i] = stack.length > 0 ? stack[stack.length - 1] : 0;
            stack.push(valuesArray[i]);
        }
    
        return nextLargerValues;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
