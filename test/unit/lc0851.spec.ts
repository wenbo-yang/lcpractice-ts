xdescribe('leetcode 851: loud and rich', () => {
    function loudAndRich(richer: number[][], quiet: number[]): number[] {
        const numPeople = quiet.length;
        const graph: number[][] = new Array(numPeople).fill(0).map(() => []);
    
        for (const [richerPerson, lessRichPerson] of richer) {
            graph[lessRichPerson].push(richerPerson);
        }
    
        const result: number[] = new Array(numPeople).fill(-1);

        
        for (let i = 0; i < numPeople; ++i) {
            dfs(i, result, quiet, graph);
        }
        return result;
    };

    function dfs(person: number, result: number[], quiet: number[], graph: number[][]) {
        if (result[person] !== -1) {
            return result;
        }
    
        result[person] = person;
    
        for (const richerPerson of graph[person]) {
            dfs(richerPerson, result, quiet, graph);
        
            if (quiet[result[richerPerson]] < quiet[result[person]]) {
                result[person] = result[richerPerson];
            }
        }
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
