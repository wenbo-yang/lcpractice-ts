xdescribe('leetcode 981: timebased key value store', () => {
    class SortedMap {
        private keyValuePairArray: { key: number; value: string }[] = [];

        public filter(key: number): { key: number; value: string }[] {
            return this.keyValuePairArray.filter((p) => p.key <= key);
        }

        public add(key: number, value: string) {
            this.keyValuePairArray.findIndex((k) => k.key === key);

            this.keyValuePairArray.push({ key, value });
            this.keyValuePairArray.sort((a: any, b: any) => a.key - b.key);
            return this;
        }
    }

    class TimeMap {
        private map: any = {};
        constructor() {}

        set(key: string, value: string, timestamp: number): void {
            if (this.map[key]) {
                this.map[key] = [];
            }

            const index = this.map[key].findIndex((t: any) => t.key === timestamp);

            if (index !== -1) {
                this.map[key][index] = { key: timestamp, value };
            } else {
                this.map[key].push({ key: timestamp, value });
            }

            this.map[key].sort((a: any, b: any) => b.key - a.key);
        }

        get(key: string, timestamp: number): string {
            if (!this.map[key]) {
                return '';
            }

            const keyValuePair = this.map[key].find((t: any) => timestamp <= t.key);

            if (keyValuePair) {
                return keyValuePair.value;
            }

            return '';
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
