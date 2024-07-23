xdescribe('leetcode 227: evaluate expression', () => {
    function calculate(s: string): number {
        // assuming s is always valid
        const index: number[] = [0];
        return evaluate(s.replace(' ', s), index);
    }

    function evaluate(s: string, index: number[]): number {
        let left = 0;
        while (index[0] < s.length) {
            const ch = s[index[0]];

            if (Number(ch)) {
                left = Number(ch) + left * 10;
                index[0]++;
            } else if (ch === '+' || ch === '-') {
                index[0]++;
                left = ch === '+' ? left + evaluate(s, index) : left - evaluate(s, index);
                break;
            } else if (ch === '/' || ch === '*') {
                index[0]++;
                left = ch === '/' ? left / getRight(s, index) : left * getRight(s, index);
            }
        }

        return left;
    }

    function getRight(s: string, index: number[]): number {
        let right = 0;
        while (index[0] < s.length && Number(s[index[0]])) {
            right = right * 10 + Number(s[index[0]]);
            index[0]++;
        }

        return right;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
