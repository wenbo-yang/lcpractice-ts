xdescribe('leetcode 715: range module', () => {
    class RangeModule {
        ranges: number[][] = [];
        
        constructor() {
        }
    
        addRange(left: number, right: number): void {
            const newRanges: number[][] = [];
            let inserted = false;
            for (const kv of this.ranges) {            
                if (kv[0] > right && !inserted) {
                    newRanges.push([left, right]);
                    inserted = true;
                }
                if (kv[1] < left || kv[0] > right) { 
                    newRanges.push(kv);
                } else {
                    left = Math.min(left, kv[0]);
                    right = Math.max(right, kv[1]);
                }
            }       
            if (!inserted) {
                newRanges.push([left, right]);       
            }
                
            this.ranges = newRanges;
        }
    
        queryRange(left: number, right: number): boolean {
            const n = this.ranges.length;
            let l = 0;
            let r = n - 1;
            // Binary search
            while (l <= r) {
                let m = l + (r - l) / 2;
                if (this.ranges[m][1] < left)
                    l = m + 1;
                else if (this.ranges[m][0] > right)
                    r = m - 1;
                else
                    return this.ranges[m][0] <= left && this.ranges[m][1] >= right;
            }
            return false;
        }
    
        removeRange(left: number, right: number): void {
            const newRanges: number[][] = [];        
            for (const kv of this.ranges) {
                if (kv[1] <= left || kv[0] >= right) {
                    newRanges.push(kv);
                } else {
                    if (kv[0] < left)
                        newRanges.push([kv[0], left]);
                    if (kv[1] > right)
                        newRanges.push([right, kv[1]]);
                }        
            }
            this.ranges = newRanges;
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
