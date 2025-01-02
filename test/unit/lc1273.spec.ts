xdescribe('leetcode 1273: delete tree node', () => {
    type TreeNode = { sum: number; count: number };

    let totalNodes: number;
    let parent: number[];
    let value: number[];

    let graph: number[][] = [];

    function buildGraph(): void {
        graph = Array.from({ length: totalNodes }, () => []);
        for (let i = 1; i < totalNodes; ++i) {
            graph[parent[i]].push(i);
        }
    }

    function depthFirstSearch(node: number): TreeNode {
        let sum: number = value[node]; 
        let count: number = 1; 

        for (let child of graph[node]) {
            let { sum: childSum, count: childCount } = depthFirstSearch(child); 
            sum += childSum; 
            count += childCount;
        }

        if (sum === 0) count = 0;

        return { sum, count };
    }
        
    function deleteTreeNodes(totalNodes: number, parent: number[], value: number[]): number {
        this.totalNodes = totalNodes;
        this.parent = parent;
        this.value = value;
    
        buildGraph(); 
    
        return depthFirstSearch(0).count;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
