import { MinHeap } from "./commonLibs";

xdescribe('leetcode 743: network delay time', () => {
    function networkDelayTime(times: number[][], n: number, k: number): number {
        const edgeCostMap = new Map<string, number>();
        const parentChildren = new Map<number, number[]>();
        for (const t of times) {
            edgeCostMap.set([t[0], t[1]].join(), t[2]);
            parentChildren.set(t[0], (parentChildren.get(t[0]) || []).concat(...[t[1]]));
        }

        const minHeap = new MinHeap<{node: number, delay: number}>();
        const visited = new Set<number>();
        minHeap.push({node: k, delay: 0});

        let currentMin = 0;
        while(minHeap.length > 0 && visited.size < n) {
            const top = minHeap.peek();
            minHeap.pop();
            if (visited.has(top.node)) {
                continue;
            }

            visited.add(top.node);
            currentMin += top.delay;
            
            const children = parentChildren.get(top.node) || [];
            
            for (const child of children) {
                const delay = edgeCostMap.get([top.node, child].join()) || Number.MIN_SAFE_INTEGER;
                minHeap.push({node: child, delay});
            }
        }

        return visited.size === n ? currentMin : -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
