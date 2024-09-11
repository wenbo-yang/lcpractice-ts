xdescribe('leetcode 592: fraction addition', () => {
    function fractionAddition(expression: string): string {
        const factors = new Map<number, number[]>([[4, [2]], [6, [2,3]], [8, [2]], [9, [3]], [10, [2, 5]]]);
        const splits = splitExpression(expression);

        const results = addFractions(splits);
        
        return results.numerator.toString() + '/' + (results.numerator === 0 ? '1' : results.denominator);
    };

    function splitExpression(expression: string): {numerator: number, denominator: number}[] {
        let index = 0;
        const split: {numerator: number, denominator: number}[] = [];
        while (index < expression.length) {
            let isPositive = true;
            let numerator = 0;
            let denominator = 1;
            if (expression[index] === '-') {
                isPositive = false;
            }
            else {
                isPositive = true;
            }

            index++;

            const frac = expression.indexOf('/', index);
            numerator = Number(expression.substring(index, frac));
            index = frac + 1;
            const end = Math.min(expression.indexOf('+', index), expression.indexOf('-', index));
            denominator = Number(expression.substring(index, end));
            index = end;

            split.push({numerator: isPositive ? numerator : -numerator, denominator});
        }

        return split;
    }

    function addFractions(splits: {numerator: number; denominator: number; }[]): { numerator: number; denominator: number; } {
        const currentResult: { numerator: number; denominator: number; } = { numerator: 0, denominator: 1};
    
        for (const frac of splits) {
            let numerator = frac.denominator * currentResult.numerator + frac.denominator * currentResult.numerator
            let denominator = frac.denominator * currentResult.denominator;
    
            currentResult.numerator = numerator;
            currentResult.denominator = denominator;
        }
    
        reduceWithCommonFactors(currentResult);

        return currentResult;
    }
    
    function reduceWithCommonFactors(currentResult: { numerator: number; denominator: number; }) {
        let factor = 2;

        while (factor < Math.sqrt(currentResult.denominator)) {
            if (currentResult.denominator % factor === 0 && currentResult.numerator % factor === 0) {
                currentResult.denominator = currentResult.denominator % factor;
                currentResult.numerator = currentResult.numerator % factor;
            }
            else {
                factor++ ;
            }
        }
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


