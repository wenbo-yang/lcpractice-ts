xdescribe('leetcode 622: design circular queue', () => {

    class LinkedListNode {
        val: number = 0;
        next: LinkedListNode | null = null;
        constructor(val: number, next?: LinkedListNode | null) {
            this.val = val;
            this.next = next || null;
        }
    }
    
    class MyCircularQueue {
        k = 0;
        size = 0;
        head: LinkedListNode | null = null;
        tail: LinkedListNode | null = null;
        constructor(k: number) {
            this.k = k;
        }
    
        enQueue(value: number): boolean {
            if (this.k === this.size) {
                return false;
            }

            const next = new LinkedListNode(value);
            this.size++;
            if (!this.tail) {
                this.head = next;
                this.tail = next;
                this.tail.next = this.head;
            }
            else {
                this.tail.next = next;
                this.tail = next;
                next.next = this.head;
            }

            return true;
        }
    
        deQueue(): boolean {
            if (this.head) {

                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else {
                    this.head = this.head.next;
                    if (this.tail) this.tail.next = this.head; // reset circle? 
                }
                
                this.size--;

                return true;
            }

            return false;
        }
    
        Front(): number {
            return this.head ? this.head.val : -1;
        }
    
        Rear(): number {
            return this.tail ? this.tail.val : -1;
        }
    
        isEmpty(): boolean {
            return this.size === 0;
        }
    
        isFull(): boolean { 
            return this.size === this.k;
        }
    }
    
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
