xdescribe('leetcode 1286: iterator for combination', () => {
    class CombinationIterator {
        private n: number = 0;
        private combinationLength: number = 0;
        private characters: string = '';
        private t: string[] = [];
        private cs: string[] = [];
        private idx: number = 0;
        
        constructor(characters: string, combinationLength: number) {
            this.n = characters.length;
            this.combinationLength = combinationLength;
            this.characters = characters;
            this.dfs(0);
        }
    
        next(): string {
            return this.cs[this.idx++];
        }
    
        hasNext(): boolean {
            return this.idx < this.cs.length;
        }

        dfs(i: number) {
            if (this.t.length === this.combinationLength) {
                this.cs.push(this.t.join());
                return;
            }
            if (i === this.n) {
                return;
            }
            this.t.push(this.characters[i]);
            this.dfs(i + 1);
            this.t.pop();
            this.dfs(i + 1);
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
