xdescribe('leetcode 658: find k closest elements', () => {
    class LinkedListNode {
        val: number;
        next: LinkedListNode | null;

        constructor(val: number) {
            this.val = val;
            this.next = null;
        }
    }
    
    class LinkedList {
        head: LinkedListNode | null = null;
        tail: LinkedListNode | null = null;
        
        addHead(val: number) {
            const node = new LinkedListNode(val);
            if (!this.head) {
                this.head = node;
                this.tail = this.head;
            }
            else {
                node.next = this.head;
                this.head = node;
            }
        }

        addTail(val: number) {
            if (!this.tail) {
                this.addHead(val);
            }
            else {
                const node = new LinkedListNode(val);
                this.tail.next = node;
                this.tail = node;
            }
        }

        toArray() : number[] {
            const result: number[] = [];
            let temp = this.head;
            while(temp) {
                result.push(temp.val);
                temp = temp.next;
            }

            return result;
        }

    }
    
    function findClosestElements(arr: number[], k: number, x: number): number[] {
        // 1 2 3 4 5
        //     3 
        if (k >= arr.length) {
            return arr;
        }

        let l = 0;
        let r = arr.length - 1;

        let pivot = 0;
    
        while (l < r) {
            pivot = Math.floor((r + l) / 2);
            if (arr[pivot] === x) {
                break;
            }

            if (arr[pivot] < x) {
                r = pivot - 1;
            }
            else {
                l = pivot + 1;
            }
        }

        if (arr[pivot] !== x) {
            return [];
        }

        const list = new LinkedList();
        list.addHead(arr[pivot]);
        l = pivot - 1;
        r = pivot + 1;
        while (k > 0) {
            let targetL = l >= 0 ? arr[l] : Number.MIN_SAFE_INTEGER;
            let targetR = r < arr.length ? arr[r] : Number.MAX_SAFE_INTEGER;
        
            if (arr[pivot] - targetL <= targetR - arr[pivot]) {
                list.addHead(arr[l]);
                l--;
            }
            else {
                list.addTail(arr[r]);
                r++;
            }
        }

        return list.toArray();
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
