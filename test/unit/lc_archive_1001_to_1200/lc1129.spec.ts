import { Queue} from './commonLibs';

xdescribe('leetcode 1129: shortest path with alternating colors', () => {
    function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
        const map = new Map<number, [number, number, string][]>();
        
        for (const r of redEdges) {
            const children: [number, number, string][] = map.get(r[0]) || [];
            children.push([r[0], r[1], 'r']);
            map.set(r[0], children);
        }

        for (const b of blueEdges) {
            const children: [number, number, string][] = map.get(b[0]) || [];
            children.push([b[0], b[1], 'b']);
            map.set(b[0], children);
        }

        const result = bfs(map, n);

        return result;

    };

    function bfs(map: Map<number, [number, number, string][]>, n: number): number[] {
        const visited = new Set<string>();
        let result = new Array<number>().fill(-1);
        let queue = new Queue<{fromColor: string, parent: number, node: number, depth: number}>();
        queue.enque({fromColor: 'b', parent: -1, node: 0, depth: 0});
        let length = 0;
        while(queue.length) {
            const top = queue.deque();
            if (!top) break;
            if (top.node === n - 1) {
                length = top.depth;
                break;
            }

            if (result[top.node] === -1) {
                result[top.node] = top.depth; 
            }

            visited.add([top.parent, top.node, top.fromColor].join());
            const children = map.get(top.node) || [];
            let suitableChildren: [number, number, string][] = [];
            if (top.fromColor === 'b') {
                suitableChildren = (map.get(top.node) || []).filter(c => c[2] === 'r'); 
            }
            else {
                suitableChildren = (map.get(top.node) || []).filter(c => c[2] === 'b'); 
            }

            for (const child of children) {
                if (!visited.has([child[0], child[1], child[2]].join())) {
                    queue.enque({fromColor: top.fromColor === 'r' ? 'b' : 'r', parent: top.node, node: child[1], depth: top.depth + 1});
                }
            }
        }

        queue = new Queue<{fromColor: string, parent: number, node: number, depth: number}>();
        queue.enque({fromColor: 'r', parent: -1, node: 0, depth: 0});
        length = 0;
        while(queue.length) {
            const top = queue.deque();
            if (!top) break;
            if (top.node === n - 1) {
                length = top.depth;
                break;
            }

            if (result[top.node] > top.depth ) {
                result[top.node] = top.depth; 
            }
            
            visited.add([top.parent, top.node, top.fromColor].join());
            const children = map.get(top.node) || [];
            let suitableChildren: [number, number, string][] = [];
            if (top.fromColor === 'b') {
                suitableChildren = (map.get(top.node) || []).filter(c => c[2] === 'r'); 
            }
            else {
                suitableChildren = (map.get(top.node) || []).filter(c => c[2] === 'b'); 
            }

            for (const child of children) {
                if (!visited.has([child[0], child[1], child[2]].join())) {
                    queue.enque({fromColor: top.fromColor === 'r' ? 'b' : 'r', parent: top.node, node: child[1], depth: top.depth + 1});
                }
            }
        }

        return result;
    }
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



