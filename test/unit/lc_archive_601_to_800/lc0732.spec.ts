xdescribe('leetcode 732: my calendar 3', () => {
    class MyCalendarThree {
        maxCount = 0;
        map = new Map<number, number>();
        constructor() {
        }
    
        book(startTime: number, endTime: number): number {
            // auto l = prev(counts_.upper_bound(start));   // l->first < start
            // auto r = counts_.lower_bound(end);           // r->first >= end
            // for (auto curr = l, next = curr; curr != r; curr = next) {
            //     ++next;
                
            //     if (next->first > end)
            //         counts_[end] = curr->second;
                
            //     if (curr->first <= start && next->first > start)
            //         max_count_ = max(max_count_, counts_[start] = curr->second + 1);            
            //     else
            //         max_count_ = max(max_count_, ++curr->second);
            // }
            
            return this.maxCount;
        }

        sortMap() {
            const array = Array.from(this.map.entries()).sort((a, b) => a[0] - b[0]);
            this.map = new Map<number, number>(array);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
