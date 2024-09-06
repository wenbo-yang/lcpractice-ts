import { inherits } from 'util';

export class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export class SingleLinkedList {
    public head: ListNode | null;
    constructor(nums: number[]) {
        if (nums.length === 0) {
            this.head = null;
        } else {
            this.head = new ListNode(nums[0]);
            let temp = this.head;
            for (let i = 1; i < nums.length; i++) {
                temp.next = new ListNode(nums[i]);
                temp = temp.next;
            }
        }
    }

    public static convertToArray(head: ListNode | null): number[] {
        let temp: ListNode | null = head;
        const array: number[] = [];
        while (temp) {
            array.push(temp.val);
            temp = temp.next;
        }

        return array;
    }
}

export class DoubleLinkedListNode {
    public val: number = 0;
    public next: DoubleLinkedListNode | null;
    public prev: DoubleLinkedListNode | null;
    constructor(val?: number, next?: DoubleLinkedListNode | null, prev?: DoubleLinkedListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.prev = prev === undefined ? null : prev;
    }
}

export class DoubleLinkedList {
    public head: DoubleLinkedListNode | null = null;
    public tail: DoubleLinkedListNode | null = null;
    constructor(nums: number[] = []) {
        if (nums.length === 0) {
            this.head = null;
        } else {
            this.head = new DoubleLinkedListNode(nums[0]);
            let temp = this.head;
            let prev = this.head.prev;
            for (let i = 1; i < nums.length; i++) {
                temp.next = new DoubleLinkedListNode(nums[i]);
                temp.prev = prev;
                prev = temp;
                temp = temp.next;
            }

            this.tail = prev;
        }
    }

    public addHead(num: number) {
        if (num === -1) {
            return;
        }

        const node = new DoubleLinkedListNode(num);
        node.next = this.head;
        node.prev = null;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
    }

    public removeTail(): DoubleLinkedListNode | null {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return null;
        }

        if (this.tail) {
            const val = this.tail.val;

            this.tail = this.tail.prev;
            if (this.tail) this.tail.next = null;

            return new DoubleLinkedListNode(val);
        }

        return null;
    }

    public remove(node: DoubleLinkedListNode | null): DoubleLinkedListNode | null {
        if (!node) {
            return null;
        }
        const val = node.val;
        if (node === this.head && node === this.tail) {
            this.head = null;
            this.tail = null;
        }

        if (node === this.tail) {
            this.tail = this.tail.prev;
            if (this.tail) this.tail.next = null;
        } else if (node === this.head) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
        } else {
            // remove from middle
            const prev = node.prev;
            const next = node.next;

            if (prev) prev.next = next;
            if (next) next.prev = prev;
        }

        return new DoubleLinkedListNode(val);
    }

    public static convertToArray(head: ListNode | null): number[] {
        let temp: ListNode | null = head;
        const array: number[] = [];
        while (temp) {
            array.push(temp.val);
            temp = temp.next;
        }

        return array;
    }
}

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export class NTreeNode {
    val: number;
    children: NTreeNode[] = [];
    constructor(val?: number, children?: NTreeNode[]) {
        this.children = children || [];
        this.val = val === undefined ? 0 : val;
    }
}

export class QuadTreeNode {
    val: boolean;
    isLeaf: boolean;
    topLeft: QuadTreeNode | null;
    topRight: QuadTreeNode | null;
    bottomLeft: QuadTreeNode | null;
    bottomRight: QuadTreeNode | null;
    constructor(val?: boolean, isLeaf?: boolean, topLeft?: QuadTreeNode, topRight?: QuadTreeNode, bottomLeft?: QuadTreeNode, bottomRight?: QuadTreeNode) {
        this.val = val === undefined ? false : val;
        this.isLeaf = isLeaf === undefined ? false : isLeaf;
        this.topLeft = topLeft === undefined ? null : topLeft;
        this.topRight = topRight === undefined ? null : topRight;
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
        this.bottomRight = bottomRight === undefined ? null : bottomRight;
    }
}

export class Queue<T> {
    private queuePointer = 0;
    private array: T[] = [];

    constructor(values?: T[]) {
        this.array = Array.from(values || []);
        this.queuePointer = 0;
    }

    public get length() {
        return this.array.length - this.queuePointer;
    }

    public enque(item: T): void {
        this.array.push(item);
    }

    public deque(): T | undefined {
        const value = this.queuePointer !== this.array.length ? this.array[this.queuePointer++] : undefined;
        if (this.queuePointer === this.array.length) {
            this.array = [];
            this.queuePointer = 0;
        }
        return value;
    }

    public peek(): T | undefined {
        return this.array[0];
    }

    public pop(): T | undefined {
        const result = this.array.pop();
        return result;
    }

    public get last(): T | undefined {
        return this.array[this.array.length - 1];
    }
}

export class BinaryTree {
    public root: TreeNode | null = null;

    constructor(nums: (number | null)[]) {
        this.writeTreeBfs(nums);
    }

    public static convertTreeNodeToArrayBfs(root: TreeNode | null): (number | null)[] {
        const result: (number | null)[] = [];

        const nodeque = new Queue<TreeNode | null>();
        nodeque.enque(root);

        while (nodeque.length !== 0) {
            const node = nodeque.deque();

            if (node) {
                result.push(node.val);
                if (node.left || node.right) {
                    // not leaf node
                    nodeque.enque(node.left);
                    nodeque.enque(node.right);
                }
            } else {
                result.push(null);
            }
        }

        return result;
    }

    private writeTreeBfs(nums: (number | null)[]) {
        const nodeque: Queue<TreeNode | null> = new Queue();
        this.root = new TreeNode(nums[0] || undefined);
        nodeque.enque(this.root);
        let index = 1;

        while (index < nums.length && nodeque.length > 0) {
            const node = nodeque.deque();
            if (node) {
                const left = nums[index++];
                node.left = left || left === 0 ? new TreeNode(left) : null;
                const right = nums[index++];
                node.right = right || right === 0 ? new TreeNode(right) : null;

                nodeque.enque(node.left);
                nodeque.enque(node.right);
            }
        }
    }
}

export abstract class Heap<T> {
    protected heap: Array<T> = [];
    protected comparatorFn: (value1: T, value2: T) => number = (value1: T, value2: T): number => {
        if (value1 > value2) return 1;
        if (value1 < value2) return -1;
        return 0;
    };

    constructor(cb?: (value1: T, value2: T) => number) {
        this.comparatorFn = cb || this.comparatorFn;
    }

    public peek(): T {
        return this.heap[0];
    }

    public push(value: T) {
        this.heap.push(value);
        this.heapUp();
    }

    public pop(): T {
        var retVal = this.heap[0];

        this.swap(0, this.heap.length - 1);
        this.heap.pop();

        if (this.heap.length > 0) {
            this.heapDown();
        }

        return retVal;
    }

    public toArray(): Array<T> {
        return this.heap;
    }

    // assume this is o(1) search and o(logk) removal
    public remove(target: T) {
        for (let i = 0; i < this.heap.length; i++) {
            if (this.comparatorFn(this.heap[i], target) === 0) {
                this.swap(i, this.heap.length - 1);
                this.heap.pop();

                if (this.heap.length > 0) {
                    this.heapDown();
                }
            }
        }
    }

    public contains(target: T): boolean {
        for (let i = 0; i < this.heap.length; i++) {
            if (this.comparatorFn(this.heap[i], target) === 0) {
                return true;
            }
        }

        return false;
    }

    public get length(): number {
        return this.heap.length;
    }

    public abstract heapUp(): void;
    public abstract heapDown(): void;

    protected swap(i: number, j: number) {
        var temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

export class MinHeap<T> extends Heap<T> {
    public heapUp(): void {
        var current = this.length - 1;

        while (current != 0) {
            var parent = current % 2 == 0 ? Math.floor(current / 2 - 1) : Math.floor(current / 2);

            if (this.comparatorFn(this.heap[current], this.heap[parent]) >= 0) {
                break;
            }

            this.swap(current, parent);
            current = parent;
        }
    }

    public heapDown(): void {
        var current = 0;

        while (current < this.length) {
            var left = Math.floor(current * 2 + 1);
            var right = Math.floor(current * 2 + 2);
            var index = current;
            if (left < this.length && right < this.length) {
                index = this.comparatorFn(this.heap[left], this.heap[right]) < 0 ? left : right;
            } else if (right >= this.length) {
                index = left;
            }

            if (index >= this.length || this.comparatorFn(this.heap[index], this.heap[current]) > 0) {
                break;
            }

            this.swap(current, index);
            current = index;
        }
    }
}

export class MaxHeap<T> extends Heap<T> {
    public heapUp() {
        var current = this.length - 1;

        while (current != 0) {
            var parent = current % 2 == 0 ? Math.floor(current / 2 - 1) : Math.floor(current / 2);
            if (this.heap[current] <= this.heap[parent]) {
                break;
            }

            this.swap(current, parent);
            current = parent;
        }
    }

    public heapDown() {
        var current = 0;

        while (current < this.length) {
            var left = Math.floor(current * 2 + 1);
            var right = Math.floor(current * 2 + 2);
            var index = current;
            if (left < this.length && right < this.length) {
                index = this.comparatorFn(this.heap[left], this.heap[right]) > 0 ? left : right;
            } else if (right >= this.length) {
                index = left;
            }

            if (index >= this.length || this.comparatorFn(this.heap[index], this.heap[current]) < 0) {
                break;
            }

            this.swap(current, index);
            current = index;
        }
    }
}

export class _Node {
    val: number;
    neighbors: _Node[];

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

export class TrieNode {
    public char: string;
    public children: TrieNode[] = [];
    public end: boolean;

    constructor(char: string, children: TrieNode[], end: boolean) {
        this.char = char;
        this.children = children;
        this.end = end;
    }
}

export class Trie {
    private root: TrieNode[] = [];

    constructor() {}

    insert(word: string): void {
        let tempNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const foundMatching = tempNode.find((t) => t.char === word[i]);
            if (foundMatching) {
                foundMatching.end = i === word.length - 1;
                tempNode = foundMatching.children;
            } else {
                tempNode.push(new TrieNode(word[i], [], i === word.length - 1));
                tempNode = tempNode[tempNode.length - 1].children;
            }
        }
    }

    search(word: string): boolean {
        let tempNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const expectsEnd = i === word.length - 1;
            const foundMatching = tempNode.find((t) => t.char === word[i]);
            if (!foundMatching || foundMatching.end !== expectsEnd) {
                return false;
            }

            tempNode = foundMatching.children;
        }

        return true;
    }

    startsWith(prefix: string): boolean {
        let tempNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const foundMatching = tempNode.find((t) => t.char === prefix[i]);
            if (!foundMatching) {
                return false;
            }

            tempNode = foundMatching.children;
        }

        return true;
    }
}

export class UnionFind {
    private ranks: number[] = [];
    private parents: number[] = [];

    constructor(size: number) {
        this.ranks = new Array<number>(size + 1).fill(0);
        let i = 0;
        this.parents = new Array<number>(size + 1).map((r) => i++);
    }

    public find(u: number): number {
        if (u !== this.parents[u]) {
            this.parents[u] = this.find(this.parents[u]);
        }
        return this.parents[u];
    }

    public union(u: number, v: number): boolean {
        const pu = this.find(u);
        const pv = this.find(v);

        if (pu === pv) {
            return false;
        }

        if (this.ranks[pv] < this.ranks[pu]) {
            this.parents[pv] = pu;
        } else if (this.ranks[pv] > this.ranks[pu]) {
            this.parents[pu] = pv;
        } else {
            this.parents[pv] = pu;
            this.ranks[pu] += 1;
        }

        return true;
    }
}

/**
 * A lock for synchronizing async operations.
 * Use this to protect a critical section
 * from getting modified by multiple async operations
 * at the same time.
 */
export class Mutex {
    /**
     * When multiple operations attempt to acquire the lock,
     * this queue remembers the order of operations.
     */
    private _queue: {
        resolve: (release: ReleaseFunction) => void;
    }[] = [];

    private _isLocked = false;

    /**
     * Wait until the lock is acquired.
     * @returns A function that releases the acquired lock.
     */
    acquire() {
        return new Promise<ReleaseFunction>((resolve) => {
            this._queue.push({ resolve });
            this._dispatch();
        });
    }

    /**
     * Enqueue a function to be run serially.
     *
     * This ensures no other functions will start running
     * until `callback` finishes running.
     * @param callback Function to be run exclusively.
     * @returns The return value of `callback`.
     */
    async runExclusive<T>(callback: () => Promise<T>) {
        const release = await this.acquire();
        try {
            return await callback();
        } finally {
            release();
        }
    }

    /**
     * Check the availability of the resource
     * and provide access to the next operation in the queue.
     *
     * _dispatch is called whenever availability changes,
     * such as after lock acquire request or lock release.
     */
    private _dispatch() {
        if (this._isLocked) {
            // The resource is still locked.
            // Wait until next time.
            return;
        }
        const nextEntry = this._queue.shift();
        if (!nextEntry) {
            // There is nothing in the queue.
            // Do nothing until next dispatch.
            return;
        }
        // The resource is available.
        this._isLocked = true; // Lock it.
        // and give access to the next operation
        // in the queue.
        nextEntry.resolve(this._buildRelease());
    }

    /**
     * Build a release function for each operation
     * so that it can release the lock after
     * the operation is complete.
     */
    private _buildRelease(): ReleaseFunction {
        return () => {
            // Each release function make
            // the resource available again
            this._isLocked = false;
            // and call dispatch.
            this._dispatch();
        };
    }
}

type ReleaseFunction = () => void;
