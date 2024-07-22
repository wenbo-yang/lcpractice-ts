xdescribe('leetcode 22: generate', () => {
    function generateParenthesis(n: number): string[] {
        if (n <= 0) {
            return [];
        }

        let result: Set<string> = new Set();
        result.add('()');

        for (let i = 1; i < n; i++) {
            result = generateParenthesisHelper(result);
        }

        return Array.from(result);
    }

    function generateParenthesisHelper(input: Set<string>): Set<string> {
        const result: Set<string> = new Set();
        input.forEach((s) => {
            let startIndex = 0;
            while (s.indexOf('()', startIndex) !== -1) {
                const index = s.indexOf('()', startIndex);
                const first = s.substring(0, index);
                const second = s.substring(index + 2);

                startIndex = index + 1;
                result.add(`${first}(())${second}`);
                result.add(`${first}()()${second}`);
            }

            result.add(`(${s})`);
            result.add(`${s}()`);
            result.add(`()${s}`);
        });

        return result;
    }

    it('test case 1 Input: Input: n = 3, Output: ["((()))","(()())","(())()","()(())","()()()"]', () => {
        const n = 3;

        const result = generateParenthesis(n);

        expect(result).toContain('((()))');
        expect(result).toContain('(()())');
        expect(result).toContain('(())()');
        expect(result).toContain('()(())');
        expect(result).toContain('()()()');
    });

    it('test case 2 Input: Input: n = 1, Output: ["()"]', () => {
        const n = 1;

        const result = generateParenthesis(n);

        expect(result).toEqual(['()']);
    });
});
