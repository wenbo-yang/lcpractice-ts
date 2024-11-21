xdescribe('leetcode 816: ambiguous coord', () => {
    function ambiguousCoordinates(s: string): string[] {
        s = s.slice(1, s.length - 1);
        const stringLength = s.length;
        const results: string[] = [];
        // Try each possible split of the string into two parts
        for (let i = 1; i < stringLength; i++) {
            // Generate all valid numbers for the left part
            for (const left of generateDecimals(s.slice(0, i))) {
                // Generate all valid numbers for the right part
                for (const right of generateDecimals(s.slice(i))) {
                    // Combine both parts with parentheses and a comma to form coordinates
                    results.push(`(${left}, ${right})`);
                }
            }
        }

        return results;
    };

    function generateDecimals(str: string): string[] {
        const possibleDecimals: string[] = [];
        for (let i = 1; i < str.length; i++) {
            const numberWithDecimal = `${str.slice(0, i)}.${str.slice(i)}`;
            // Check if the resulting string is still a valid number
            if (`${Number(numberWithDecimal)}` === numberWithDecimal) {
                possibleDecimals.push(numberWithDecimal);
            }
        }
        // Check if the string itself is a valid number without a decimal point
        if (`${Number(str)}` === str) {
            possibleDecimals.push(str);
        }
        return possibleDecimals;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
