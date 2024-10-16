xdescribe('leetcode 641: description', () => {
    class LinkedListNode {
        val: number;
        next: LinkedListNode | null = null;
        prev: LinkedListNode | null = null;

        constructor(val: number) {
            this.val = val;
        }
    }

    class MyCircularDeque {
        head: LinkedListNode | null = null;
        size: number = 0;
        k: number;

        constructor(k: number) {
            this.k = k;
        }
    
        insertFront(value: number): boolean {
            if (this.size === this.k) {
                return false;
            }
            
            const newNode =new LinkedListNode(value); 

            if (!this.head) {
                this.head = newNode;
                this.head.next = this.head;
                this.head.prev = this.head;
            } 
            else {
                 const temp = this.head;
                 this.head = newNode;
                 this.head.prev = temp.prev;
                 if (temp.prev) temp.prev.next = this.head;              
            }

            this.size++;
            return true;
        }
    
        insertLast(value: number): boolean {
            if (this.size === this.k) {
                return false;
            }

            if (!this.head) {
                return this.insertFront(value);
            }
            else {
                const newNode =new LinkedListNode(value); 
                const tail = this.head.prev;

                if (tail) {
                    newNode.prev = tail;
                    newNode.next = this.head;
                    tail.next = newNode;
                }
            }

            this.size++;

            return true;
        }
    
        deleteFront(): boolean {
            if (this.size === 0) {
                return false;
            }

            if (this.size === 1) {
                this.head = null;
            }
            else {
                if (this.head) {
                    const temp = this.head.next;
                    const tail = this.head.prev;

                    if (temp) {
                        temp.prev = this.head.prev;
                        this.head = temp;
                        if (tail) tail.next = this.head;
                    }
                }
                
            }

            this.size--;
            
            return true;
        }
    
        deleteLast(): boolean {
            if (this.size === 0) {
                return false;
            }

            if (this.size === 1) {
                return this.deleteFront();
            }
            else {
                if (this.head) {
                    const tail = this.head.prev;
                    if (tail ){
                        const temp = tail.prev;
                        if (temp) {
                            temp.next = this.head;
                            this.head.prev = temp;
                        }
                    }
                }
            }
            this.size--;
            return true;
            
        }
    
        getFront(): number {
            return this.head?.val || -1;
        }
    
        getRear(): number {
            return this.head?.prev?.val || -1;
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
