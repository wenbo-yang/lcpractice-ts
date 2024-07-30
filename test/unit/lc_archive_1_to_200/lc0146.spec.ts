xdescribe('leetcode 146: LRU cache', () => {
    class DoubleLinkedList {
        public tail: DoubleLinkedListNode | null = null;
        public head: DoubleLinkedListNode | null = null;

        protected removeNode(node: DoubleLinkedListNode | undefined | null) {
            if (!node) {
                return;
            }

            if (this.head === this.tail && node === this.head) {
                this.head = null;
                this.tail = null;
                return;
            }

            if (node === this.head) {
                this.head = this.head.next;
                return;
            }

            if (node === this.tail) {
                if (this.tail.prev) {
                    this.tail.prev.next = null;
                    this.tail = this.tail.prev;
                }

                return;
            }

            let prev = node.prev;
            let next = node.next;

            if (prev) prev.next = next;
        }

        protected addHead(node: DoubleLinkedListNode | undefined | null) {
            if (!node) {
                return;
            }
            if (!this.head && !this.tail) {
                this.head = node;
                this.tail = node;
                return;
            }

            if (this.head) {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
                this.head.prev = null;
            }
        }

        protected removeTail(): { key: number; value: number } | undefined {
            if (this.tail) {
                const value = this.tail.value;
                const key = this.tail.key;
                if (this.tail.prev) {
                    this.tail.prev.next = null;
                    this.tail = this.tail.prev;
                } else {
                    this.head = null;
                    this.tail = null;
                }
                return { key, value };
            }
            return undefined;
        }
    }

    class DoubleLinkedListNode {
        public value: number;
        public key: number;
        public next: DoubleLinkedListNode | null;
        public prev: DoubleLinkedListNode | null;

        constructor(key: number, value: number, next?: DoubleLinkedListNode | null, prev?: DoubleLinkedListNode | null) {
            this.key = key;
            this.value = value;
            this.next = next === undefined ? null : next;
            this.prev = prev === undefined ? null : prev;
        }
    }

    class LRUCache extends DoubleLinkedList {
        private keyMap: Map<number, DoubleLinkedListNode> = new Map();
        private capacity: number;

        constructor(capacity: number) {
            super();
            this.capacity = capacity;
        }

        public get(key: number): number {
            if (this.keyMap.has(key)) {
                const node = this.keyMap.get(key);
                this.removeNode(node);
                this.addHead(node);
            }

            return this.keyMap.get(key)?.value || -1;
        }

        public put(key: number, value: number) {
            if (this.keyMap.has(key)) {
                const node = this.keyMap.get(key);
                this.removeNode(node);
                this.addHead(node);
                if (node) node.value = value;
            } else {
                if (this.capacity === this.keyMap.size) {
                    const nodeKeyValue = this.removeTail();
                    this.keyMap.delete(nodeKeyValue?.key as any);
                }
                const node = new DoubleLinkedListNode(key, value);
                this.keyMap.set(key, node);
                this.addHead(node);
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {
        const cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        const r1 = cache.get(1);
    });
});
