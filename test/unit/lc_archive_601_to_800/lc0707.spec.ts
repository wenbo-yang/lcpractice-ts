xdescribe('leetcode 707: description', () => {
    class LinkedListNode {
        val: number;
        next: LinkedListNode | null = null;
        prev: LinkedListNode | null = null;

        constructor(val: number) {
            this.val = val;
        }
    }
    
    class MyLinkedList {
        head: LinkedListNode | null = null;
        tail: LinkedListNode | null = null;
        size: number = 0;
        
        constructor() {    
        }
    
        get(index: number): number {
           if (index >= this.size) {
                return -1;
            } 

            let temp = this.head;
            while(index > 0) {
                temp = temp?.next || null;
                index--;
            }

            return temp?.val || -1;
        }
    
        addAtHead(val: number): void {
            const newHead = new LinkedListNode(val);
            if (!this.head) {
                this.head = newHead;
                this.tail = this.head;
            }
            else {
                newHead.next = this.head;
                this.head.prev = newHead;
                this.head = newHead;
            }
            this.size++;
        }
    
        addAtTail(val: number): void {
            if (!this.tail) {
                this.addAtHead(val);
            }
            else {
                const newHead = new LinkedListNode(val);
                this.tail.next = newHead;
                newHead.prev = this.tail;
                this.tail = newHead;
            }
            this.size++;
        }
    
        addAtIndex(index: number, val: number): void {
            if (index > this.size) {
                return;
            }

            if (index === this.size) {
                this.addAtTail(val);
                return;
            }

            let temp = this.head;
            while(index-- > 0) {
                temp = temp?.next || null;
            }

            if (temp) {
                const newNode = new LinkedListNode(val);
                newNode.prev = temp.prev;
                newNode.next = temp;
                if (temp.prev) temp.prev.next = newNode;
            }
            this.size++;
        }
    
        deleteAtIndex(index: number): void {
            if (index > this.size) {
                return;
            }

            if (this.size === 1) {
                this.head = null;
                this.tail = null;
                this.size--;
                return;
            }

            if (index === 0) {
                this.head = this.head?.next || null;
                if (this.head) this.head.prev = null;
                this.size--;
                return;
            }

            if (index === this.size - 1) {
                this.tail = this.tail?.prev || null;
                if (this.tail) this.tail.next = null;
                this.size--;
                return;
            }

            let temp = this.head;
            while(index-- > 0) {
                temp = temp?.next || null;
            }

            if (temp) {
                const prev = temp.prev;
                const next = temp.next;

                if (prev) prev.next = next;
                if (next) next.prev = prev;
            }

            this.size--;

            return;
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
