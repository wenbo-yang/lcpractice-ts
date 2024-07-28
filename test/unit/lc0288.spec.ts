xdescribe('leetcode 288: description', () => {
    class ValidWordAbbr {
        private dict = new Map<string, Set<string>>();

        public constructor(dictionary: string[]) {
            for (const s of dictionary) {
                this.dict.set(this.abbr(s), (this.dict.get(this.abbr(s)) || new Set<string>()).add(s));
            }
        }

        public isUnique(word: string): boolean {
            var ws = this.dict.get(this.abbr(word));
            return ws == null || (ws.size == 1 && ws.has(word));
        }

        private abbr(s: string): string {
            let n = s.length;
            return n < 3 ? s : s.substring(0, 1) + (n - 2) + s.substring(n - 1);
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
