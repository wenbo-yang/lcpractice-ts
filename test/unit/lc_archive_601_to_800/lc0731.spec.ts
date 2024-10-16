xdescribe('leetcode 731: my calendar', () => {
    class MyCalendarTwo {
        cal1: number[][] = [];
        cal2: number[][] = [];

        constructor() {
        }
    
        book(start: number, end: number): boolean {
            const b1 = this.hasConflict(this.cal1, start, end);
            const b2 = this.hasConflict(this.cal2, start, end);

            if (b1 && b2) {
                return false;
            }
            
            if (b1) {
                this.cal2.push([start, end]);
                this.cal2.sort((a, b) => a[1] - b[1]);
            }
            
            if (b2) {
                this.cal1.push([start, end]);
                this.cal1.sort((a, b) => a[1] - b[1]);
            }

            return true;
        }


        hasConflict(cal: number[][], start: number, end: number): boolean {
            if (cal.length === 0) {
                return false;
            }

            let l = 0;
            let r = cal.length - 1;

            while (l < r) {
                let pivot = Math.floor((l + r) / 2);
                if (cal[pivot][1] > end) {
                    r = pivot;
                }
                else {
                    l = pivot + 1;
                }
            }

            const last = cal[cal.length - 1];

            if ((l === cal.length && last[1] <= start) || (cal[l+1][0] > end && cal[l - 1][1] <= start)) {
                return true;
            }
            
            return false;
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
