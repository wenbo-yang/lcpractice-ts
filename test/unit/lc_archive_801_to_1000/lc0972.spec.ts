xdescribe('leetcode 972: equal rational numbers', () => {
    function isRationalEqual(s: string, t: string): boolean {
        return Math.abs(valueOf(s) - valueOf(t)) < 1e-9;
    };

    function valueOf(s: string): number {
        let leftParenIndex = s.indexOf('(');
        if (leftParenIndex === -1) {
            return parseFloat(s);
        }
        let rightParenIndex = s.indexOf(')');
        let dotIndex = s.indexOf('.');
        let nonRepeating = parseFloat(s.substring(0, leftParenIndex));
        let nonRepeatingLength = leftParenIndex - dotIndex - 1;
        let repeating = parseInt(s.substring(leftParenIndex + 1, rightParenIndex));
        let repeatingLength = rightParenIndex - leftParenIndex - 1;
        return nonRepeating +
            repeating * Math.pow(0.1, nonRepeatingLength) * (1.0 / (Math.pow(10, repeatingLength) - 1))
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
