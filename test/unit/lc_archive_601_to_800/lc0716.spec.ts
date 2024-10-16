xdescribe('leetcode 716: description', () => {
    class DoubleLinkedListNode {
        val: number;
        prev: DoubleLinkedListNode | null = null;
        next: DoubleLinkedListNode | null = null;

        constructor(val: number) {
            this.val = val;
        }
    }

    class DoubleLinkedList {
        tail: DoubleLinkedListNode | null = null;

        addTail(val: number){
            const newNode = new DoubleLinkedListNode(val);

            if (this.tail) {
                this.tail.next = newNode;
            }
            
            this.tail = newNode;
        }

        removeTail(): DoubleLinkedListNode | null {
            const temp = this.tail;
            this.tail = this.tail?.prev || null;

            return temp;
        }

        removeNode(node: DoubleLinkedListNode) {
            const next = node.next;
            const prev = node.prev;

            if (next) next.prev = prev;
            if (prev) prev.next = next;
        }

        peek(): number | undefined {
            return this.tail?.val;
        }
    }

    class MaxStack {
        private doubleLinkedList = new DoubleLinkedList();
        private maxStack: (number | (DoubleLinkedListNode | null))[][] = [];

        constructor() {
        }

        public push(val: number): void {
            this.doubleLinkedList.addTail(val);
            
            if (this.maxStack.length === 0 || Number(this.maxStack[this.maxStack.length - 1][0]) <= val) {
                this.maxStack.push([val, this.doubleLinkedList.tail]);
            }
        }

        public pop(): number | undefined{
            const temp = this.doubleLinkedList.removeTail();

            if (temp === this.maxStack[this.maxStack.length - 1][1]) {
                this.maxStack.pop();
            }
            

            return temp?.val;
        }


        public top(): number | undefined {
            return this.doubleLinkedList.peek();
        }

        public peekMax(): number | undefined {
            return Number(this.maxStack[this.maxStack.length - 1][0]);
        }

        public popMax(): number | undefined {
            const top = this.maxStack.pop();
            if (top) {
                const node = top[1];
                this.doubleLinkedList.removeNode(node as DoubleLinkedListNode);
            }
            
            return top ? Number(top[0]) : undefined;
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
