xdescribe('leetcode 928: minimize malware spread II ', () => {
    function find(x: number, parent: number[]): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x], parent);
        }
        return parent[x];
    }

    function merge(a: number, b: number, parent: number[], cluster: number[]): void {
        const parentA: number = find(a, parent);
        const parentB: number = find(b, parent);
        if (parentA !== parentB) {
            cluster[parentB] += cluster[parentA];
            parent[parentA] = parentB;
        }
    }

    function minMalwareSpread(graph: number[][], initial: number[]): number {
        const n: number = graph.length;
        const parent: number[] = new Array<number>(n).fill(0);
        const cluster: number[] = new Array<number>(n).fill(0);;
        parent.length = n;
        cluster.length = n;

        for (let i = 0; i < n; ++i) {
            parent[i] = i;
        }
    
        cluster.fill(1);

        const isClean: boolean[] = new Array(n).fill(true);
        for (const infectedNode of initial) {
            isClean[infectedNode] = false;
        }

        for (let i = 0; i < n; ++i) {
            if (!isClean[i]) continue;
            for (let j = i + 1; j < n; ++j) {
            if (isClean[j] && graph[i][j] === 1) {
                merge(i, j, parent, cluster);
            }
            }
        }

        const infectedClustersCount: number[] = new Array(n).fill(0);
        const infectedClusterRoots: Map<number, Set<number>> = new Map();
        for (const infectedNode of initial) {
            const uniqueClusters: Set<number> = new Set();
            for (let j = 0; j < n; ++j) {
            if (isClean[j] && graph[infectedNode][j] === 1) {
                uniqueClusters.add(find(j, parent));
            }
            }
            for (const root of uniqueClusters) {
            infectedClustersCount[root]++;
            }
            infectedClusterRoots.set(infectedNode, uniqueClusters);
        }

        let maxClusterSize: number = -1;
        let nodeToRemove: number = -1;

        for (const [infectedNode, roots] of infectedClusterRoots.entries()) {
            let cleanClusterSizeSum: number = 0;
            for (const root of roots) {
                if (infectedClustersCount[root] === 1) { // If the cluster is only infected once
                    cleanClusterSizeSum += cluster[root];
                }
            }
            if (maxClusterSize < cleanClusterSizeSum || (maxClusterSize === cleanClusterSizeSum && infectedNode < nodeToRemove)) {
                maxClusterSize = cleanClusterSizeSum;
                nodeToRemove = infectedNode;
            }
        }

        // Ensure that if no node can improve the situation, the smallest index is chosen
        if (nodeToRemove === -1) {
            nodeToRemove = Math.min(...initial);
        }

        return nodeToRemove;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
