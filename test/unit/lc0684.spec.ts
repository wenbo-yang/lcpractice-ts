xdescribe('leetcode 684: redundant connections', () => {
    class UnionFindSet {
        private parents: number[] = [];
        private ranks: number[] = [];
 
        public constructor(n: number) {
            this.parents = new Array<number>(n + 1);
            this.ranks = new Array<number>(n + 1);
            for (let i = 0; i < this.parents.length; ++i) {
                this.parents[i] = i;
                this.ranks[i] = 1;
            }
        }
 
        public union(u: number, v: number): boolean {
            let pu = this.find(u);
            let pv = this.find(v);
            if (pu == pv) return false;
 
            if (this.ranks[pv] > this.ranks[pu]) this.parents[pu] = pv;           
            else if (this.ranks[pu] > this.ranks[pv]) this.parents[pv] = pu;
            else {
                this.parents[pv] = pu;
                this.ranks[pu] += 1;
            }
 
            return true;
        }
 
        public find(u: number): number {
            while (this.parents[u] != u) {
                this.parents[u] = this.parents[this.parents[u]];
                u = this.parents[u];
            }
            return u;
        }
    }
    
    function findRedundantConnection(edges: number[][]): number[] {
        const s = new UnionFindSet(edges.length);
        for (const edge of edges)
            if (!s.union(edge[0], edge[1]))
                return edge;
        return [];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
