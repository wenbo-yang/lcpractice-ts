xdescribe('leetcode 439: Ternary Expression Parser', () => {
    // T?T?F:5:3
    // T ? LEFT = T?F:5 RIGHT: 3 
    function ternaryExpressionParser(e: string): string {
        return expressionHelper(e, 0).value;
    }

    function expressionHelper(e: string, l: number): {value: string, index: number} {
        if (l >= e.length) {
            return {value: '', index: l}
        }
        
        let trueFalse = '';
        let left: {value: string, index: number};
        let right: {value: string, index: number};

        if (isTrueFalse(e[l]) && e[l + 1] === '?') {
            trueFalse = e[l];
            
            left = expressionHelper(e, l + 2);
            right = expressionHelper(e, left.index + 2);
        
            return evaluateBasicExpression(trueFalse, left, right)
        }

        if (isTrueFalse(e[l]) && e[l + 1] !== '?') {
            return {value: e[l], index: l + 2};
        }

        let value = ''
        while (l < e.length && e[l] !== ':') {
            value += e[l];
            l++
        }

        return {value, index: l + 1};
    }

    function evaluateBasicExpression(trueFalse: string, left: { value: string; index: number; }, right: { value: string; index: number; }): { value: string; index: number; } {
        if (trueFalse === 'T') {
            return {value: left.value, index: right.index + 1}
        }
    }

    function isTrueFalse(char: string): boolean {
        return (char === 'T' || char === 'F') 
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





