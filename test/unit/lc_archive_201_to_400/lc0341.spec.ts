xdescribe('leetcode 341: flatten nested list iterator', () => {
    class NestedIterator {
        private flattened: number[] = [];
        private index = 0;

        constructor(nestedList: any) {
            this.dfs(nestedList);
        }

        hasNext(): boolean {
            return this.flattened[this.index] !== undefined;
        }

        next(): number {
            return this.flattened[this.index++];
        }

        private dfs(nestedList: any) {
            if (typeof nestedList === 'number') {
                this.flattened.push(nestedList);
                return;
            }

            for (const list of nestedList) {
                this.dfs(list);
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
