xdescribe('leetcode 277: find celebrity', () => {
    function findCelebrity(graph: number[][]): number {
        let potentialCeleb = -1;
        for (let i = 0; i < graph.length; i++) {
            if (findPotentialCelebrity(graph, i)) {
                potentialCeleb = i;
            }
        }

        return isCelebrity(graph, potentialCeleb) ? potentialCeleb : -1;
    }

    function findPotentialCelebrity(graph: number[][], i: number): boolean {
        return graph[i].reduce((a, b) => a + b) === 1;
    }

    function isCelebrity(graph: number[][], potentialCeleb: number): boolean {
        let columnSum = 0;
        for (let i = 0; i < graph.length; i++) {
            columnSum += graph[i][potentialCeleb];
        }

        return columnSum === graph.length;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
