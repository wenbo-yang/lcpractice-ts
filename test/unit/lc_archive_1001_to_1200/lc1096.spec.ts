xdescribe('leetcode 1096: brace expansion II', () => {
    function braceExpansionII(expression: string): string[] {
        const resultSet: Set<string> = new Set();
        depthFirstSearch(expression, resultSet);
        return Array.from(resultSet).sort();
    };

    function depthFirstSearch(exp: string, result: Set<string>) {
        const closingBraceIndex = exp.indexOf('}');
        if (closingBraceIndex === -1) {
            result.add(exp);
            return;
        }
        
        const openingBraceIndex = exp.lastIndexOf('{', closingBraceIndex);
      
        const beforeBrace = exp.substring(0, openingBraceIndex);
        const afterBrace = exp.substring(closingBraceIndex + 1);
        const insideBrace = exp.substring(openingBraceIndex + 1, closingBraceIndex).split(',');
    
        for (const element of insideBrace) {
            depthFirstSearch(beforeBrace + element + afterBrace, result);
        }
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
