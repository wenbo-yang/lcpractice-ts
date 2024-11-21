xdescribe('leetcode 990: satisfiability of equality equations', () => {
    
    function find(index: number, parent: number[]): number {
        if (parent[index] !== index) {
            parent[index] = find(parent[index], parent);
        }
        return parent[index];
    }
    
    function union(index1: number, index2: number, parent: number[]): void {
        parent[find(index1, parent)] = find(index2, parent);
    }
    
    function equationsPossible(equations: string[]): boolean {
        const parent: number[] = Array.from({ length: 26 }, (_, i) => i);

        for (const equation of equations) {
            const index1 = equation.charCodeAt(0) - 'a'.charCodeAt(0);
            const index2 = equation.charCodeAt(3) - 'a'.charCodeAt(0);
    
            if (equation.charAt(1) === '=') {
                union(index1, index2, parent);
            }
        }
    
        for (const equation of equations) {
            const index1 = equation.charCodeAt(0) - 'a'.charCodeAt(0);
            const index2 = equation.charCodeAt(3) - 'a'.charCodeAt(0);
    
            if (equation.charAt(1) === '!') {
                if (find(index1, parent) === find(index2, parent)) {
                    return false;
                }
            }
        }
    
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
