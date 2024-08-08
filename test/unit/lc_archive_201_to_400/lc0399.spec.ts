xdescribe('leetcode 399: evaluate division', () => {
    // union find
    class Vertex {
        value: string;
        rank: number;
        parent: Vertex;
        ratio: number;
        constructor(value: string, rank: number) {
            this.rank = Number.MAX_SAFE_INTEGER;
            this.ratio = 1;
            this.value = value;
        }
    }

    function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
        const nodeMap = new Map<string, Vertex>();
        let rank = 0;
        
        for(let i = 0; i < equations.length; i++) {
            const eq = equations[i]
            if(!nodeMap.has(eq[0])) {
                const n = new Vertex(eq[0], rank++);
                n.parent = n;
                nodeMap.set(eq[0], n);
                
            }

            if(!nodeMap.has(eq[1])) {
                const n = new Vertex(eq[1], rank++);
                n.parent = n;
                nodeMap.set(eq[1], n);
            }

            union(nodeMap, eq[0], eq[1], values[i]);
        }

        const results = new Array<number>(queries.length).fill(-1.0);
        for (let i = 0; i < queries.length; i++) {
            const q = queries[i];
            find(nodeMap, q[0]); 
            find(nodeMap, q[1]);

            const node1 = nodeMap.get(q[0]);
            const node2 = nodeMap.get(q[1]);

            if (node1 && node2) {
                if (node1.parent === node2.parent) {
                    results[i] = node1.ratio / node2.ratio;
                }
            }
        }

        return results;
    };

    function union(nodeMap: Map<string, Vertex>, s1: string, s2: string, s1s2ratio: number) {
        const node1 = nodeMap.get(s1);
        const node2 = nodeMap.get(s2);
    
        if (node1 && node2) {
            let ratio = s1s2ratio;
            if (node1.rank < node2.rank) {
                ratio = 1/ratio;
            }

            if (node1.rank > node2.rank) {
                node2.parent = node1;
                node2.ratio = ratio;

                find(nodeMap, node2.value);
            }
            else {
                node1.parent = node2;
                node1.ratio = ratio;
                find(nodeMap, node1.value)
            }
        }
    }

    function find(nodeMap: Map<string, Vertex>, nodeValue: string): number {
        const curr = nodeMap.get(nodeValue);
        if (curr) {
            while (curr.parent !== curr) {
                const ratio = find(nodeMap, curr.parent.value)
                curr.ratio = ratio * curr.ratio
            }

            return curr.ratio;
        }

        return 1;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



