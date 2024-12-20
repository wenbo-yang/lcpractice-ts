xdescribe('leetcode 1177: can mae palidrome from substring', () => {
    function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
        // s => [a b c d a] 
        //       t t t t t 
        //      [ab, bc, cd, da]
        //      [f:1, f:1, f:1, f:1]
        //      [abc bcd, cda]
        //       f:2, f:1, f:2
        //      [abcd bcda]
        //        f:2  f:2
        //      [abcda]
        
        // dfs with memorization // 
        const mem = initialize(s);
        const result: boolean[] = [];
        for (const query of queries) {
            const changes = dfs(s, query[0], query[1], mem);
            result.push(changes <= query[2]);
        }

        return result;
    };

    function dfs(s: string, l: number, r: number, mem: Map<string, number>): number {
        if (l > r) {
            return Number.MAX_SAFE_INTEGER;
        }

        if (mem.has([l,r].join())) {
            return mem.get([l, r].join())!;
        }

        const prev = dfs(s, l + 1, r - 1, mem);
        const changes = s[l]===s[r] ? prev : prev + 1
        mem.set([l,r].join(), changes);

        return changes;
    }
    

    function initialize(s: string) {
        const map = new Map<string, number>();

        for(let i = 0; i < s.length; i++) {
            map.set([i,i].join(), 0);
        }
        
        for (let i = 0; i < s.length - 1; i++) {
            if(s[i] === s[i + 1]) {
                map.set([i, i + 1].join(), 0);
            }
            else {
                map.set([i, i + 1].join(), 1);
            }
        }

        return map;
    }

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



