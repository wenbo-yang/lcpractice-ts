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
