xdescribe('leetcode 721: accounts merge', () => {
    class UnionFind {
        rankMap = new Map<string, number>();
        parentMap = new Map<string, string>();
        parentInfo = new Map<string, Set<string>>()
        accounts: string[][];

        constructor(accounts: string[][]) {
            this.accounts = accounts;
            this.parseRankMap();
        }
        
        parseRankMap() {
            let rank = 0;
            for (const ae of this.accounts) {
                for (let i = 0; i < ae.length; i++) {
                    if (!this.rankMap.has(ae[i])) {
                        this.rankMap.set(ae[i], rank++);
                        this.parentMap.set(ae[i], ae[i]);
                    }
                }
            }
        }

        union() {
            for (const ae of this.accounts) {
                const edges = this.generateEdgeGroupings(ae);
                for (const edge of edges) {
                    const lower = (this.rankMap.get(edge[0]) || 0) < (this.rankMap.get(edge[1]) || 0) ? edge[0] : edge[1];
                    const higher = (this.rankMap.get(edge[0]) || 0) > (this.rankMap.get(edge[1]) || 0) ? edge[0] : edge[1];
                    this.parentMap.set(higher, this.find(lower));
                }
            }
        }
        
        generateEdgeGroupings(ae: string[]) {
            const edges: string[][] = [];
            for (let i = 0; i < ae.length - 1; i++) {
                edges.push([ae[i], ae[i + 1]]);
            }

            return edges;
        }

        find(curr: string): string {
            const parent = this.parentMap.get(curr) || '';
            while (parent !== curr) {
                this.parentMap.set(curr, this.find(parent))
            }
            return parent;
        }

    }
    
    function accountsMerge(accounts: string[][]): string[][] {
        const uniqueParentMap = new Map<string, Set<string>>();
        const unionFind = new UnionFind(accounts);
        unionFind.union();

        for (const row of accounts) {
            for (const it of row) {
                const parent = unionFind.find(it);
                const set = uniqueParentMap.get(parent) || new Set<string>();
                set.add(it);

                uniqueParentMap.set(it, set);
            }
        }

        const result: {name: string[], emails:string[]}[] = [];

        for (const row of uniqueParentMap.values()) {
            result.push({name: [], emails: []});
            
            for (const v of row) {
                if (v.includes('@')) {
                    result[result.length - 1].emails.push(v);
                }
                else {
                    result[result.length - 1].name.push(v);
                }
            }
        }
        return result.map( r => [r.name.join(), ...r.emails]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
