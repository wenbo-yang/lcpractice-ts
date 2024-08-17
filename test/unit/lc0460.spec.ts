xdescribe('leetcode 460: LFU cache', () => {
    class DoubleLinkedListNode<T>{
        val: T;
        next: DoubleLinkedListNode<T> | undefined = undefined;
        prev: DoubleLinkedListNode<T> | undefined = undefined;
        constructor(val: T) {
            this.val = val;
        }
    }

    class DoubleLinkedList<T> {
        head: DoubleLinkedListNode<T> | undefined;
        
        remove(targetNode: DoubleLinkedListNode<T>) {
            if (targetNode === this.head && !this.head.next) {
                this.head = undefined;
            }
            
            const prev = targetNode.prev;
            const next = targetNode.next;

            if (prev) prev.next = next;
            if (next) next.prev = prev;
        }

        addAfter(targetNode: DoubleLinkedListNode<T>, val: T) {
            const next = targetNode.next;
            const newNode = new DoubleLinkedListNode(val);
            
            newNode.prev = targetNode;
            newNode.next = next;

            if (next) next.prev = newNode;
        }

        addHead(val: T) {
            const newNode = new DoubleLinkedListNode(val);
            newNode.next = this.head;
            if(this.head) this.head.prev = newNode;
            this.head = newNode;
        }
    }
    
    class LFUCache {
        private capacity: number = 0;
        private list = new DoubleLinkedList<{count: number, values: Map<number, number>}>();
        private keyNodeMap = new Map<number, DoubleLinkedListNode<{count: number, values: Map<number, number>}>>();

        constructor(capacity: number) {
            this.capacity = capacity;
        }
    
        get(key: number): number {
            const node = this.keyNodeMap.get(key);
            if (!node) return NaN;
            const value = node.val.values.get(key);
            if (!value) return NaN;

            if (node.next && this.IsNextCountPlus1(node, node.next)) {
                this.addToNext(node.next, key, value);
            }
            else {
                this.InsertCountPlus1NodeAfter(node, key, value);
            }

            this.removeFromCurrentCountSet(node, key);

            return value;
        }
        
        put(key: number, value: number): void {
            const node = this.keyNodeMap.get(key);
            if (!node) {
                if (this.isHeadCount1()) {
                    this.addToHead(key, value);    
                } 
                else {
                    this.list.addHead({count: 1, values: new Map<number,number>([[key, value]])})
                }

                return;
            }

            node.val.values.set(key, value);
            if (node.next && this.IsNextCountPlus1(node, node.next)) {
                this.addToNext(node.next, key, value);
            }
            else {
                this.InsertCountPlus1NodeAfter(node, key, value);
            }

            this.removeFromCurrentCountSet(node, key);
        }


        private addToHead(key: number, value: number) {
            if (this.list.head) {
                this.list.head.val.values.set(key, value);
            }
        }

        private isHeadCount1() {
            return this.list.head && this.list.head.val.count === 1;
        }

        private IsNextCountPlus1(node: DoubleLinkedListNode<{ count: number; values: Map<number, number>; }>, next: DoubleLinkedListNode<{ count: number; values: Map<number, number>; }>) {
            return node.val.count + 1 === next.val.count;
        }
        
        private addToNext(next: DoubleLinkedListNode<{ count: number; values: Map<number, number>; }>, key: number, value: number) {
            next.val.values.set(key, value);
        }
        
        private InsertCountPlus1NodeAfter(node: DoubleLinkedListNode<{ count: number; values: Map<number, number>; }>, key: number, value: number) {
            const newNodeVal = { count: node.val.count + 1, values: new Map<number, number>([[key, value]])};
            this.list.addAfter(node, newNodeVal);
        }

        private removeFromCurrentCountSet(node: DoubleLinkedListNode<{ count: number; values: Map<number, number>; }>, key: number) {
            node.val.values.delete(key);

            if (node.val.values.size === 0) {
                this.list.remove(node);
            }
        }
    }


    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});









