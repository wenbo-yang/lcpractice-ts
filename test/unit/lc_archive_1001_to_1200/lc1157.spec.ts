xdescribe('leetcode 1157: description', () => {
    class Node {
        l: number;
        r: number;
        x: number;
        count: number;
    }
    
    class SegmentTree {
        private tr: Node[] = [];
        private nums: number[];
    
        public constructor(nums: number[]) {
            let n = nums.length;
            this.nums = nums;
            this.tr = new Node[n << 2];
            for (let i = 0; i < this.tr.length; i++) {
                this.tr[i] = new Node();
            }
            
            this.build(1, 1, n);
        }
    
        private build(u: number, l: number, r: number) {
            this.tr[u].l = l;
            this.tr[u].r = r;
            if (l == r) {
                this.tr[u].x = this.nums[l - 1];
                this.tr[u].count = 1;
                return;
            }
            let mid = Math.floor((l + r)/ 2);
            this.build(u << 1, l, mid);
            this.build(u << 1 | 1, mid + 1, r);
            this.pushup(u);
        }
    
        public query(u: number, l: number, r: number): number[] {
            if (this.tr[u].l >= l && this.tr[u].r <= r) {
                return [this.tr[u].x, this.tr[u].count];
            }
            let mid = Math.floor((this.tr[u].l + this.tr[u].r) / 2);
            if (r <= mid) {
                return this.query(u << 1, l, r);
            }
            if (l > mid) {
                return this.query(u << 1 | 1, l, r);
            }
            var left = this.query(u << 1, l, r);
            var right = this.query(u << 1 | 1, l, r);
            if (left[0] == right[0]) {
                left[1] += right[1];
            } else if (left[1] >= right[1]) {
                left[1] -= right[1];
            } else {
                right[1] -= left[1];
                left = right;
            }
            return left;
        }
    
        private pushup(u: number) {
            if (this.tr[u << 1].x ===  this.tr[u << 1 | 1].x) {
                this.tr[u].x = this.tr[u << 1].x;
                this.tr[u].count = this.tr[u << 1].count + this.tr[u << 1 | 1].count;
            } else if (this.tr[u << 1].count >= this.tr[u << 1 | 1].count) {
                this.tr[u].x = this.tr[u << 1].x;
                this.tr[u].count = this.tr[u << 1].count - this.tr[u << 1 | 1].count;
            } else {
                this.tr[u].x = this.tr[u << 1 | 1].x;
                this.tr[u].count = this.tr[u << 1 | 1].count - this.tr[u << 1].count;
            }
        }
    }
    
    
    class MajorityChecker {

        private tree: SegmentTree;
        private d = new Map<number, number[]>();
        constructor(arr: number[]) {
            this.tree = new SegmentTree(arr);
            for (let i = 0; i < arr.length; ++i) {
                this.d.set(arr[i], (this.d.get(arr[i]) || []).concat(i));
            }
        }
    
        query(left: number, right: number, threshold: number): number {
            let x = this.tree.query(1, left + 1, right + 1)[0];
            let l = this.search(this.d.get(x) || [], left);
            let r = this.search(this.d.get(x) || [], right + 1);
            return r - l >= threshold ? x : -1;
        }

        private search(arr: number[], x: number): number {
            let left = 0, right = arr.length;
            while (left < right) {
                let mid = Math.floor((left + right) /2 );
                if (arr[mid] >= x) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
