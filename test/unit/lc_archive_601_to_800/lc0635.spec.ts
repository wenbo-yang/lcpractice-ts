xdescribe('leetcode 635: design log storage', () => {
    class Log {
        id: number;
        ts: string;
        constructor(id: number, ts: string) {
            this.id = id;
            this.ts = ts;
        }
    }
    
    class LogSystem {
        private logs: Log[] = [];
        private d = new Map<string, number>();
    
        public constructor() {
            this.d.set("Year", 4);
            this.d.set("Month", 7);
            this.d.set("Day", 10);
            this.d.set("Hour", 13);
            this.d.set("Minute", 16);
            this.d.set("Second", 19);
        }
    
        public put(id: number, ts: string) {
            this.logs.push(new Log(id, ts));
        }
    
        public retrieve(start: string, end: string, granularity: string): number[] {
            const ans: number[] = [];
            const i = this.d.get(granularity) || 0;
            const s = start.substring(0, i);
            const e = end.substring(0, i);
            for (const log of this.logs) {
                const t = log.ts.substring(0, i);
                if (s <= t && t <= e) {
                    ans.push(log.id);
                }
            }
            return ans;
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
