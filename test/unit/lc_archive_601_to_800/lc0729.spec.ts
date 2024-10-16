xdescribe('leetcode 729: description', () => {
    class MyCalendar {
        end: number[][] = [];

        constructor() {
        }
    
        book(start: number, end: number): boolean {
            if (this.hasConflict(start, end)) {
                return false;
            }

            this.end.push([start, end]);
            this.end.sort((a, b) => a[1] - b[1]);

            return true;
        }


        hasConflict(start: number, end: number): boolean {
            if (this.end.length === 0) {
                return false;
            }

            let l = 0;
            let r = this.end.length - 1;

            while (l < r) {
                let pivot = Math.floor((l + r) / 2);
                if (this.end[pivot][1] > end) {
                    r = pivot;
                }
                else {
                    l = pivot + 1;
                }
            }

            const last = this.end[this.end.length - 1];

            if ((l === this.end.length && last[1] <= start) || (this.end[l+1][0] > end && this.end[l - 1][1] <= start)) {
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
