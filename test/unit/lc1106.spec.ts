xdescribe('leetcode 1106: parsing a boolean expression', () => {
    function parseBoolExpr(expression: string): boolean {
        const trueFalse = evaluateParseBoolExprHelper(expression);   
        return trueFalse === 't' ? true : false;
    };

    function evaluateParseBoolExprHelper(expression: string): string {
        while(expression.includes('(')) {
            const closing = expression.indexOf(')');
            const opening = expression.lastIndexOf('(', closing);
            const operator = expression[opening - 1];
            
            const trueFalse = evaluateBasicExpression(operator, expression.substring(opening + 1, closing));
            
            expression = expression.substring(0, opening - 1) + trueFalse + expression.substring(closing + 1);
        }

        return expression;
    }

    function evaluateBasicExpression(operator: string, logicalParameters: string): string {
        if (operator === '!') {
            return logicalParameters === 't' ? 'f' : 't'
        }

        if (operator === '|') {
            return logicalParameters.includes('t') ? 't' : 'f';
        }

        if (operator === '&') {
            return logicalParameters.includes('f') ? 'f' : 't';
        }
    
        return invalidExpresionException();
    }

    function invalidExpresionException(): string {
        throw new Error("Invalid expression exceptions");
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});







