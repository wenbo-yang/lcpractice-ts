export class ListNode {
      public val: number
      public next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }

 export class SingleLinkedList {
    public head: ListNode;
    constructor(nums: number[]) {
        this.head = new ListNode(nums[0]);
        let temp = this.head;
        for (let i = 1; i < nums.length; i++) {
            temp.next = new ListNode(nums[i]);
            temp = temp.next;           
        }
    }

    public static convertToArray(head: ListNode | null): number[] {
        let temp: ListNode | null = head;
        const array: number[] = [];
        while(temp) {
            array.push(temp.val);
            temp = temp.next;
        }

        return array;
    }
 }