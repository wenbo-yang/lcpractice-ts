xdescribe('leetcode 224: evaluate expression', () => {
    function calculate(s: string): number {
        let index = [0];

        return evaluate(s, index);
    }

    function evaluate(s: string, index: number[]): number {
        let retVal = 0;
        let sign = 1;
        let val = 0;

        while (index[0] < s.length) {
            const ch = s[index[0]];

            if (isDigit(ch)) {
                val = val * 10 + (s[index[0]++].charCodeAt(0) - '0'.charCodeAt(0));
            } else if (ch === '+' || ch === '-') {
                retVal += sign * val;
                val = 0;
                sign = ch === '+' ? 1 : -1;
                index[0]++;
            } else if (ch === '(') {
                index[0]++;
                val = evaluate(s, index);
            } else if (ch === ')') {
                index[0]++;
                break;
            } else {
                index[0]++;
            }
        }

        return (retVal += sign * val);
    }

    function isDigit(ch: string) {
        return ch.charCodeAt(0) - '0'.charCodeAt(0) >= 0 && ch.charCodeAt(0) - '0'.charCodeAt(0) <= 9;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
