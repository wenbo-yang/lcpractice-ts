xdescribe('leetcode 855: exam room', () => {
    class ExamRoom {
        
        private ts = new Set<string>();
        private left = new Map<number, number>();
        private right = new Map<number, number>();
        private n;
    
        constructor(n: number) {
            this.n = n;
            this.add([-1, n]);
        }
    
        public seat() {
            let s = Array.from(this.ts).map(s => s.split(',').map(n => Number(n))).sort(this.compareSegments)[0]
            let p = (s[0] + s[1]) >> 1;
            if (s[0] === -1) {
                p = 0;
            } else if (s[1] === this.n) {
                p = this.n - 1;
            }
            this.del(s);
            this.add([s[0], p]);
            this.add([p, s[1]]);
            return p;
        }
    
        public leave(p: number) {
            let l = this.left.get(p) || 0, r = this.right.get(p) || 0;
            this.del([l, p]);
            this.del([p, r]);
            this.add([l, r]);
        }
    
        private dist(s: number[]) {
            let l = s[0], r = s[1];
            return l === -1 || r === this.n ? r - l - 1 : (r - l) >> 1;
        }
    
        private add(s: number[]) {
            this.ts.add(s.join());
            this.left.set(s[1], s[0]);
            this.right.set(s[0], s[1]);
        }
    
        private del(s: number[]) {
            this.ts.delete(s.join());
            this.left.delete(s[1]);
            this.right.delete(s[0]);
        }

        private compareSegments(a: number[], b: number[]): number {
            const distanceA = this.dist(a);
            const distanceB = this.dist(b);
            if (distanceA === distanceB) {
              return a[0] - b[0];
            }
            return distanceB - distanceA;
          };
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
